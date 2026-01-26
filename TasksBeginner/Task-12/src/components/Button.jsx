const Button = () => {
  const handleClick = () => {
    console.log(Math.round(Math.random() * 10))
  }
  return <button onClick={handleClick}>ClickMe</button>
}

export default Button