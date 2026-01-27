import { useState, useEffect } from "react";
const NameLocal = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem('name');
    return savedName ? JSON.parse(savedName) : "";
  });

  const handleChange = (event) => {
      setName(event.target.value);
  }

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name))
  },[name])

  const handleClearName = () =>{
    setName("")
  }

  return (
    <section>
      <h1>You Name : {name}</h1>
      <input type="text" value={name} onChange={handleChange} placeHolder="Enter Your Name" />
      <button onClick={handleClearName}>clearName</button>
    </section>
  )
}
export default NameLocal