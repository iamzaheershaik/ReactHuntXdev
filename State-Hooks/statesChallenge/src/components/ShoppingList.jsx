import { useState } from "react";
const ShoppingList = () => {
  const [items, setItem] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const handleSubmit = e => {

    e.preventDefault()
    if(!name || ! quantity) return;
     const newItem = {
      name,
      quantity: parseInt(quantity)
     }
    setItem((prevItems) => [...prevItems, newItem])
    setName('');
    setQuantity('');
  }
  return (
    <div>
      <h1>ShoppingList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeHolder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeHolder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">AddItem</button>
      </form>

      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item.name}-Quantity:{item.quantity}</li>;
        })}
      </ul>
    </div>
  );
};

export default ShoppingList;
