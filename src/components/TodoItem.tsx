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
      <li className="grid grid-cols-3 space-x-10 space-y-4 place-items-center">
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleCompleteChange}
          className="justify-self-start"
        />
        {todo.todo}

        <div>
          <button
            className="bg-purple-400 p-2 rounded-md"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </li>
    </div>
  );
};
