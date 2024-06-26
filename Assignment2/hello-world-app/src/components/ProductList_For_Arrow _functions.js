import React from "react";

const products = [
  { id: 1, name: "Product 1", price: 29.99 },
  { id: 2, name: "Product 2", price: 39.99 },
  { id: 3, name: "Product 3", price: 19.99 },
  { id: 4, name: "Product 4", price: 49.99 },
];

const ProductList_For_Arrow_functions = () => {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList_For_Arrow_functions;
