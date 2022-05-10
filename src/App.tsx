import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmitTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }

    console.log(todos);
  };
  return (
    <div className="App">
      <span className="heading">Task Manager</span>

      <InputField
        todo={todo}
        setTodo={setTodo}
        handleTodoSubmit={handleSubmitTodo}
      />

      {/* <TodoList /> */}
      {todos.map((item) => (
        <li>{item.todo}</li>
      ))}
    </div>
  );
};

export default App;
