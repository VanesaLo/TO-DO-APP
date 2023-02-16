import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  todo: string;
  complete: boolean;
}

const initialState: Todo[] = [
  {
    id: "1",
    todo: "do yoga",
    complete: false,
  },
  {
    id: "2",
    todo: "make coffee",
    complete: true,
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    toggleComplete: (state, action: PayloadAction<Todo>) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].complete = action.payload.complete;
    },
    deleteTodo: (state, action: PayloadAction<Todo>) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
