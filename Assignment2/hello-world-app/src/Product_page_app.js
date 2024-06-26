// src/App.js

import React from "react";
import "./CSS/ProductPage.css";
import ProductList from "./components/ProductList";

const Product_page_app = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Page</h1>
      </header>
      <ProductList />
    </div>
  );
};

export default Product_page_app;
