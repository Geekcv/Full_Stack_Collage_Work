// src/App.js

import React from "react";
import "./App.css";
import Counter from "./components/Counter_app";

const CounterApp = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
      </header>
      <Counter />
    </div>
  );
};

export default CounterApp;
