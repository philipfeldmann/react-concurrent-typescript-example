export interface Person {
  name: string;
  picture: string;
}

export const fetchPerson = async (id: number) => {
  const result = await fetch(`https://randomuser.me/api?page=${id}`);

  if (result.status === 200) {
    // Transform result from api into a Person
    const json = await result.json();
    const fetchedPerson = json.results[0];
    const transformedPerson: Person = {
      name: `${fetchedPerson.name.first} ${fetchedPerson.name.last}`,
      picture: fetchedPerson.picture.medium
    };

    // Preload image
    await new Promise(resolve => {
      const img = new Image();
      img.src = fetchedPerson.picture.medium;
      img.onload = resolve;
    });

    // Artificially create a race condition
    return new Promise<Person>(resolve => {
      setTimeout(() => resolve(transformedPerson), 5000 - Math.random() * 4000);
    });
  } else {
    throw new Error(`Api responded with status ${result.status}`);
  }
};
