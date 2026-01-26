import React from "react";

const App = () => {
  return (
    <User
      img="https://avatars.githubusercontent.com/u/200899711?s=400&u=bd4addee58bfc28d5f7fa74586b4b04b403873c5&v=4"
      name="Zaheer shaik"
      age={24}
      isMarried={false}
      hobbies={["coding", "Reading", "Sleeping"]}
    />
  );
};

const User = (props) => {
  return(
    <section>
      <img src={props.img} alt={props.name} width={200} />
      <h1>Name:{props.name}</h1>
      <h2>Age:{props.age}</h2>
      <h3>Is Married{props.isMarried}</h3>
      <h3>Hobbies: {props.hobbies}</h3>
    </section>
  )
};
export default App;
