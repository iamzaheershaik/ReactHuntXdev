import { useState } from "react";
const RandomNum = () => {
  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(Math.random() * 100),
  );
  const newRandom = () => {
    return setRandomNumber(Math.floor(Math.random() * 100))
  }
  return (
    <section>
      <h1>This is Random Number:{randomNumber}</h1>
      <button onClick={newRandom}>NewRandom</button>
    </section>
  );
};

export default RandomNum;
