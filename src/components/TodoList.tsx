import React from "react";
import { useAppSelector } from "../redux/hooks/hooks";
import { TodoItem } from "./TodoItem";
import "../index.css";

export const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos);
  return (
    <div className="bg-fuchsia-200 p-4 rounded-md justify-center items-center w-80 grid listTasks">
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
