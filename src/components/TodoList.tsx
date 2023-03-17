import React from "react";
import { Todo } from "../redux/features/todoSlice";
import { useAppSelector } from "../redux/hooks/hooks";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos);
  return (
    <ul className="bg-fuchsia-200 py-4 rounded-md">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
