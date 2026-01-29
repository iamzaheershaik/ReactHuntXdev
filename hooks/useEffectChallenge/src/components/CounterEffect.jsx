import { useEffect, useState } from 'react'
const CounterEffect = () => {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    console.log("values changes")
    document.title = `Value Changes ${counter}` 
  },[counter])
  return (
    <div>
      <h1>count:{counter}</h1>
      <button onClick={() => setCounter(counter+1)}>HIT ME</button>
    </div>
  )
}

export default CounterEffect