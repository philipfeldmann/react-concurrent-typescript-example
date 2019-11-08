import React, { useState, useEffect, FunctionComponent } from "react";
import Loading from "./components/Loading";
import "./index.css";
import { Person, fetchPerson } from "./utility/person";
import PersonCard from "./components/PersonCard";

const App: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState(0);
  const [person, setPerson] = useState<Person>();

  useEffect(() => {
    setIsLoading(true);
    fetchPerson(id)
      .then(setPerson)
      .then(() => setIsLoading(false));
  }, [id]);

  return (
    <div className="main">
      {!isLoading && person ? <PersonCard person={person} /> : <Loading />}
      <button onClick={() => setId(i => i + 1)}>Refetch</button>
    </div>
  );
};

export default App;
