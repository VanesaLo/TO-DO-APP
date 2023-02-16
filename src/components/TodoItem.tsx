import React from "react";
import { Todo } from "../redux/feautred/todoSlice";
import { useAppDispatch } from "../redux/hooks/hooks";
import { toggleComplete, deleteTodo } from "../redux/feautred/todoSlice";

interface TodoListItem {
  todo: Todo;
}

export const TodoItem: React.FC<TodoListItem> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const handleCompleteChange = () => {
    dispatch(
      toggleComplete({
        id: todo.id,
        todo: todo.todo,
        complete: !todo.complete,
      })
    );
  };

  const handleDelete = () => {
    dispatch(
      deleteTodo({
        id: todo.id,
        todo: todo.todo,
        complete: todo.complete,
      })
    );
  };

  return (
    <div>
      <li>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleCompleteChange}
        />
        {todo.todo}
        <button onClick={handleDelete}>Delete</button>
      </li>
    </div>
  );
};
