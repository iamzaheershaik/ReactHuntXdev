// const Validpassword = () => <h2>This is Valid PassWord</h2>
// const Invalidpassword = () => <h2>This is inValid PassWord</h2>

// const PassWord = ({ isValid }) => {
//   if(isValid){
//     return <Validpassword />
//   }else{
//     return <Invalidpassword />
//   }
// };

const Cart = () => {
  const items = [
    "Wireless Earphones",
    "Headphones",
    "Buds",
    "Earphones",
    "HelloBolo",
  ];
  return (
    <div>
      <h1>Cart &#128722; </h1>
      {items.length > 0 && <h2>You have {items.length} items in your Cart</h2>}
      <ul>
        <h4>Products</h4>
        {items.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
const App = () => {
  // return <section>
  {
    /* <PassWord isValid={true} /> */
  }
  {
    /* </section> */
  }
  return <Cart />;
};

export default App;
