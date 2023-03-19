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
    <li className="grid grid-cols-3 grid-rows-1 items-baseline space-y-4 itemsTasks">
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={handleCompleteChange}
        className="!w-6 !h-6 mr-5"
      />
      <div className="text-lg break-words textTodo">
        <span className="">{todo.todo}</span>
      </div>
      <div>
        <button
          className="bg-purple-400 p-2 rounded-lg w-15 ml-5 btn"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
