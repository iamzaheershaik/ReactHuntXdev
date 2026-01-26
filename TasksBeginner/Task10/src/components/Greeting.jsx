const Greeting = (props) => {
  return (
    props.timeOfDay === 'Morning' ? (<h1>This is Morning </h1>) : (<h1>This is Afternoon</h1>)
  )
}

export default Greeting