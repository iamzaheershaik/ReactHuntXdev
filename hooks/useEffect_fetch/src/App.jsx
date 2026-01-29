import { useEffect, useState } from "react";
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    getData();
  }, []);

  return (
    <div>
      {data.map((todo, index) => (
        <section key={index}>
          <li style={{ color: "red", fontWeight:"bolder" }}>{todo.title}</li>
          <li style={{ color: "blue" }}>{todo.body}</li>
        </section>
      ))}
    </div>
  );
};

export default App;
