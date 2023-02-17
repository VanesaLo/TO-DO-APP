import React from "react";
import { Todo } from "../redux/feautred/todoSlice";
import { useAppSelector } from "../redux/hooks/hooks";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos);
  return (
    <ul className="bg-fuchsia-200 p-4 rounded-md grid grid-cols-1 place-items-center">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
