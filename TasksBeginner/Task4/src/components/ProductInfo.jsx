import React from "react";

const ProductInfo = () => {
  const product = {
    name: "Laptop",
    price: "$1200",
    availability: "In Stock",
  };
  return (
    <div>
      <h1>Name of Product: {product.name}</h1>
      <h1>stockInfo: {product.price}</h1>
      <h1>StockInfo: {product.availability}</h1>
    </div>
  );
};

export default ProductInfo;
