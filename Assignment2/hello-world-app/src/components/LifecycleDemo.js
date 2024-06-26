// src/components/LifecycleDemo.js

import React, { useState, useEffect } from "react";

const LifecycleDemo = () => {
  const [count, setCount] = useState(0);

  // componentDidMount and componentDidUpdate combined
  useEffect(() => {
    console.log("Component mounted or updated");

    return () => {
      // componentWillUnmount
      console.log("Component will unmount");
    };
  }, [count]);

  return (
    <div className="lifecycle-demo">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default LifecycleDemo;
