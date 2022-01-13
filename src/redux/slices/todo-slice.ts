import { createSlice } from "@reduxjs/toolkit";

// a simple example of how redux slices works
export const todoSlice = createSlice({
  name: "todo",
  initialState: { tempData: null, newTodoIds: [], todos: [] },

  reducers: {
    clearTempData: (state) => {
      return {
        ...state,
        tempData: null,
      };
    },
    clearTodoId: (state) => {
      return {
        ...state,
        newTodoIds: [],
      };
    },
    clearTodos: (state) => {
      return {
        ...state,
        todos: [],
      };
    },
    clearAllTodo: (state) => {
      return {
        ...state,
        tempData: null,
        newTodoIds: [],
        todos: [],
      };
    },
    setTempData: (state, action) => {
      return {
        ...state,
        tempData: action.payload,
      };
    },
    setNewTodoIds: (state, action) => {
      return {
        ...state,
        newTodoIds: action.payload,
      };
    },
    setTodos: (state, action) => {
      return {
        ...state,
        todos: action.payload,
      };
    },
  },
});

export default todoSlice.reducer;

export const {
  clearTempData,
  clearTodoId,
  clearTodos,
  setNewTodoIds,
  clearAllTodo,
  setTodos,
  setTempData,
} = todoSlice.actions;
