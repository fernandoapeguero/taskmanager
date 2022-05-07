import React from "react";
import logo from "./logo.svg";
import "./App.css";

interface AppProps {
  name: string;
}

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Task Manager</span>
    </div>
  );
};

export default App;
