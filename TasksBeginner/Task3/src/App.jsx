import React from 'react'
import JSXRules from './components/JSXRules'

const App = () => {
  const myName = "Zaheershaik";
  const multiply = (a, b) => a*b;
  const specialClass = "simple-class";
  return (
    <div>
      <JSXRules />
      <p>The  Sum of Two Numbers 2+2 = {2+2}</p>
      <p>{myName}</p>
      <p>Muliplication of Two Numbers = {multiply(2,4)}</p>
      <p className={specialClass}></p>
    </div>

  )
}

export default App
