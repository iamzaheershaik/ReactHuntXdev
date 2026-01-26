import React from 'react'

const Greeting = () => {
  const Wish = "Good Morning Have a Nice Day";
  const name = "zaheer";
  const date = new Date();
  return (
    <div>
      <h1>Hey {name} {Wish}</h1>
      <p>Today is January{date.getDate()}</p>
    </div>
  )
}

export default Greeting