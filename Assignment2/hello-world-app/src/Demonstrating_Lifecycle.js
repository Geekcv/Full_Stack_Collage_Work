// src/App.js

import React from "react";
import "./App.css";
import LifecycleDemo from "./components/LifecycleDemo";

const Demonstrating_Lifecycle = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lifecycle Demo</h1>
      </header>
      <LifecycleDemo />
    </div>
  );
};

export default Demonstrating_Lifecycle;
