import { useState } from "react";

import React from 'react'

const App = () => {
  const [movie, setMovie] = useState({
    title:"chichore",
    ratings:"8.5"
  });

  const handleRating = () => {
    setMovie({...movie, ratings:5})
    
  }
  return (
    <section>
      <h1>{movie.title}</h1>
      <p>{movie.ratings}</p>
      <button onClick={handleRating}>changeRating</button>
    </section>
  )
}

export default App