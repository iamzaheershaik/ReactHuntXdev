import React from "react";

// const Person = (props) => {
//   return (
//     <div>
//       <h2>The Name of the Person: {props.name}</h2>
//       <p>The Age of the Person {props.age}</p>
//     </div>
//   )
// }

const product = ({ name, age }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
};

export default product;
