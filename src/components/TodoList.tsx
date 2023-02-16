import React from "react";
import { Todo } from "../redux/feautred/todoSlice";
import { useAppSelector } from "../redux/hooks/hooks";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
