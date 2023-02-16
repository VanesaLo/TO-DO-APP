import React, { useState, FormEvent } from "react";
import { useAppDispatch } from "../redux/hooks/hooks";
import { addTodo } from "../redux/feautred/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

export const TodoForm: React.FC = () => {
  const [newTodo, setNewTodo] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: nanoid(),
        todo: newTodo,
        complete: false,
      })
    );
    setNewTodo("");
  };

  return (
    <form className="todo-form">
      <input
        type="text"
        className="todo-input"
        placeholder="Add a todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit" className="todo-button" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};
