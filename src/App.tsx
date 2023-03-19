import React, { useState } from "react";
import "./index.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="containerApp grid grid-rows-3 grid-cols-1">
      <div className="gap-10 grid justify-center">
        <header>
          <h1 className="text-4xl font-bold font-sans italic grid justify-center mt-20">
            My Todo List
          </h1>
        </header>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
