import { useEffect, useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const [game, setGame] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    document.title = `Increment ${value}`;
  }, [value, game]);

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Click Me</button>
      <button onClick={() => setGame(value - 1)}>Decrement</button>
    </div>
  );
};

export default App;
