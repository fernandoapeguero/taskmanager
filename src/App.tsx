import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputField from "./components/InputField";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  return (
    <div className="App">
      <span className="heading">Task Manager</span>

      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
