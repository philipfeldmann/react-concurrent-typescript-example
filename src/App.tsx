import React, { FunctionComponent, Suspense, useState, useEffect } from "react";
import Loading from "./components/Loading";
import "./index.css";
import { fetchPerson, Person } from "./utility/person";
import { createResource, Resource } from "./utility/resource";
import PersonCard from "./components/PersonCard";

// Typescript workaround as concurrent api is not properly typed yet
const SuspenseList = (React as any).SuspenseList;

const App: FunctionComponent = () => {
  const [id, setId] = useState(0);
  const [persons, setPersons] = useState<Resource<Person>[]>([]);

  useEffect(() => {
    const nextPersons = [];
    for (let i = 0; i < 5; i++) {
      nextPersons.push(createResource(fetchPerson(id)));
    }
    setPersons(nextPersons);
  }, [id]);

  return (
    <div className="main">
      <SuspenseList revealOrder="forwards" tail="collapsed">
        {persons.map((person, index) => (
          <Suspense key={index} fallback={<Loading />}>
            <PersonCard person={person} />
          </Suspense>
        ))}
      </SuspenseList>
      <button onClick={() => setId(i => i + 1)}>Refetch</button>
    </div>
  );
};

export default App;
