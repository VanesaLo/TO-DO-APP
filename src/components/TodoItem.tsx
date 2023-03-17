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
    <div className="">
      <li className="flex flex-row">
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleCompleteChange}
          className="w-6 h-6"
        />
        <div className="text-lg">
          <span className="">{todo.todo}</span>
        </div>
        <button className="bg-purple-400 p-2 rounded-lg" onClick={handleDelete}>
          Delete
        </button>
      </li>
    </div>
  );
};
