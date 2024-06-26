import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Hello_World from "./Hello_World";
import reportWebVitals from "./reportWebVitals";
import Display_using_Render from "./Display_using_Render";
import Greeting_message from "./Greeting_message";
import Component_B_functionality from "./Component_B_functionality";
import Product_page_app from "./Product_page_app";
import CounterApp from "./CounterApp";
import Counter_app from "./components/Counter_app";
import Demonstrating_Lifecycle from "./Demonstrating_Lifecycle";
import React_Router from "./React_Router";
import Map_arrow_functions from "./Map_arrow_functions";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Hello_World />

    {/* <Display_using_Render /> */}

    {/* <Greeting_message /> */}

    {/* <Component_B_functionality /> */}

    {/* <Product_page_app /> */}

    {/* <Map_arrow_functions /> */}

    {/* <Counter_app /> */}

    {/* <Demonstrating_Lifecycle /> */}

    {/* <React_Router /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
