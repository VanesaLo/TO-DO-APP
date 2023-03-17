import React, { useState } from "react";
import "./index.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import TotalCompleteItems from "./components/TotalTodos";

function App() {
  return (
    <div className="containerApp h-screen">
      <div className="grid grid-col-1 place-items-center h-full">
        <header>
          <h1 className="text-4xl font-bold font-sans italic">My Todo List</h1>
        </header>
        <TodoForm />
        <TodoList />
        <TotalCompleteItems />
      </div>
    </div>
  );
}

export default App;
