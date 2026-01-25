import React from "react";

// const Product = (props) => {
//   return (
//     <div>
//       <h1>Name of the Product: {props.name}</h1>
//       <p>Price of the Product: {props.price}</p>

//     </div>
//   )
// }
const product = ({ name, price }) => {
  return (
    <div>
      <h2>{name}</h2>                          
      <p>{price}</p>
    </div>
  );
};
export default product;
