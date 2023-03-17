import React, { useState, FormEvent } from "react";
import { useAppDispatch } from "../redux/hooks/hooks";
import { addTodo } from "../redux/features/todoSlice";
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
    <form className="flex flex-row space-y-2 justify-center items-center space-x-4">
      <input
        type="text"
        className="rounded-lg p-2 w-80 text-center"
        placeholder="Add a todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-purple-400 p-2 rounded-lg"
        onClick={handleSubmit}
      >
        Add Todo
      </button>
    </form>
  );
};
