import { useState } from "react";
const TodoList = () => {
  const [todos, setTodo] = useState([]);
  const [inputValues, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValues.trim()) {
      setTodo([...todos, inputValues]);
      setInputValue("");
    }
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <h1>TodoList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValues}
          onChange={handleChange}
          placeholder="Add a New Todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
