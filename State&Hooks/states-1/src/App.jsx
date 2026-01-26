import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount((count) => {
      if (count > 0) {
        return count - 1;
      } else {
        return 0;
      }
    });
  };
  return (
    <div>
      <h2>Count: {count}</h2>

      <button
        style={{ padding: "15px", borderRadius: "5px", margin: "5px" }}
        onClick={increment}
      >
        +
      </button>
      <button
        style={{ padding: "15px", borderRadius: "5px", margin: "5px" }}
        onClick={decrement}
      >
        -
      </button>
    </div>
  );
};

export default App;
