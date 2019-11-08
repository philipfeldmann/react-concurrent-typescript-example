export interface Resource<T> {
  read(): T;
}

export const createResource = <T>(promise: Promise<T>): Resource<T> => {
  let result: T;
  let error: Error;

  const suspender = promise
    .then(r => {
      result = r;
    })
    .catch(e => {
      error = e;
    });

  return {
    read() {
      if (error) throw Error;
      else if (!result) throw suspender;
      return result;
    }
  };
};
