import { useState } from "react";
const Initial = 10;
const ExOne = () => {
  const [count, setCount] = useState(Initial);
  const HandleIncrement = () => {
    return setCount(count + 1);
  };
  const HandleReset = () => {
    return setCount(Initial);
  };
  const HandleDecrement = () => {
    return setCount(count - 1);
  };
  return (
    <section>
      <h1>Count : {count}</h1>
      <button onClick={HandleIncrement}>+</button>
      <button onClick={HandleReset}>Reset</button>
      <button onClick={HandleDecrement}>-</button>
    </section>
  );
};

export default ExOne;
