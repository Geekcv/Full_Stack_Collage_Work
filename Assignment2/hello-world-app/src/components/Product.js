// src/components/Product.js

import React from "react";

const Product = ({ product }) => {
  return (
    <div className="product">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="100" />
      <p>{product.price}</p>
    </div>
  );
};

export default Product;
