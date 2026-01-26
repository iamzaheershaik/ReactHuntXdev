import { useState } from "react";
import React from "react";

const App = () => {
  const [movies, setMovie] = useState([
    { id: 1, title: "superMan", ratings: "9.0" },
    { id: 2, title: "Batman", ratings: "8.9" },
  ]);
  const handleTitleChange = () => {
    setMovie(
      movies.map((m) => (m.id === 1 ? { ...movies, title: "SuperRaja" } : m)),
    );
  };
  return (
    <section>
      {movies.map((m) => {
        return <li key={Math.random()}>{m.title}</li>;
      })}
      <button onClick={handleTitleChange}>changeTitle</button>
    </section>
  );
};

export default App;
