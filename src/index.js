import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Heading from "./components/Heading.jsx";
import List from "./components/List";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
let greeting;
const date = new Date(2025, 1, 1, 15);
const time = date.getHours();

const style = {
  color: "green",
};

if (time < 12) {
  greeting = "Good Morning";
} else if (time < 18) {
  greeting = "Good Afternoon";
  style.color = "orange";
} else {
  greeting = "Good Evening";
  style.color = "red";
}

root.render(
  <div>
    {/* =========== Project 1 ============ */}

    <h1>Project 1</h1>
    <h2>My favourite foods</h2>
    <ul>
      <li>Injera</li>
      <li>Firfir</li>
      <li>Doro wot</li>
      <li>Lentil</li>
    </ul>

    {/* =========== Project 2 ============ */}
    <h1>Project 2</h1>
    <h2 style={style}>{greeting}</h2>

    {/* =========== Project 3 ============ */}
    <h1>Project 3</h1>
    <Heading />
    <List />

    {/* =========== Project 4 ============ */}
    <h1>Project 4</h1>
    <App />

    {/* =========== Project 5 ============ */}
    <h1>Project 5</h1>
  </div>
);
