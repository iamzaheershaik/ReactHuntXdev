const TodoList = () => {
    const [todos, setTodo] = useState([]);
    const [inputValues, setInputValue] = useState("")

  return (
    <div>
    <h1>TodoList</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValues} placeholder="Add a New Todo"></input>
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {
            todos.map((todo, index) => {
                <li key={index}>{todo}</li>
            })
        }
      </ul>
    </div>
  )
}

export default TodoList
