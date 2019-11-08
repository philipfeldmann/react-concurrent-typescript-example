import React, { FunctionComponent } from "react";
import { Person } from "../utility/person";
import { Resource } from "../utility/resource";

interface PersonCardProps {
  person: Resource<Person>;
}

const PersonCard: FunctionComponent<PersonCardProps> = ({ person }) => {
  const personData = person.read();
  return (
    <div
      style={{
        display: "flex",
        borderRadius: "10px",
        padding: "10px",
        background: "#eee",
        boxShadow: "0 10px 10px -5px rgba(0, 0, 0, 0.2)",
        marginBottom: "20px"
      }}
    >
      <div
        style={{
          borderRadius: "75px",
          width: "75px",
          height: "75px",
          background: `url(${personData.picture})`,
          marginRight: "10px"
        }}
      />
      <h2>{personData.name}</h2>
    </div>
  );
};

export default PersonCard;
