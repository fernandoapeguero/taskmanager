import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App(name: String) {
  return (
    <div className="App">
      <h1>Hello From React Typescript, ${name}</h1>
    </div>
  );
}

export default App;
