import React, { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import TotalCompleteItems from "./components/TotalTodos";

function App() {
  return (
    <div>
      <h1>Todo app</h1>
      <TodoForm />
      <TodoList />
      <TotalCompleteItems />
    </div>
  );
}

export default App;
