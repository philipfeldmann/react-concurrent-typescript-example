import React, { FunctionComponent } from "react";
import { Person } from "../utility/person";

interface PersonCardProps {
  person: Person;
}

const PersonCard: FunctionComponent<PersonCardProps> = ({ person }) => {
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
          background: `url(${person.picture})`,
          marginRight: "10px"
        }}
      />
      <h2>{person.name}</h2>
    </div>
  );
};

export default PersonCard;
