import React from "react";
import { Todo } from "../redux/features/todoSlice";
import { useAppDispatch } from "../redux/hooks/hooks";
import { toggleComplete, deleteTodo } from "../redux/features/todoSlice";

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
      <li className="grid grid-cols-3 space-y-4 place-items-center">
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleCompleteChange}
          className="w-6 h-6"
        />
        <span className="text-lg justify-self-start">{todo.todo}</span>

        <button className="bg-purple-400 p-2 rounded-lg" onClick={handleDelete}>
          Delete
        </button>
      </li>
    </div>
  );
};
