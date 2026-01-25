import React from 'react'
import Person from './components/Person'
import Product from './components/Product'

const App = () => {
  return (
    <div>
      <Person 
      name="Shaik Mohammed zaheer"
      age="25"
      />
      <Product 
      name="keyBoard"
      price="2000"
      />
    </div>
  )
}

export default App
