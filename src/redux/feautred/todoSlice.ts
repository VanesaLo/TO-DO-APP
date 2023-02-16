import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string | number;
  todo: string;
  complete: boolean;
}

const initialState: Todo[] = [
  {
    id: 1,
    todo: "do yoga",
    complete: false,
  },
  {
    id: 2,
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
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
