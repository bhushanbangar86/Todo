import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    add: (store, action) => {
      return (store = [
        ...store,
        { name: action.payload.name, date: action.payload.date },
      ]);
    },
    deleteTodo: (store, action) => {
      return (store = store.filter((item) => {
        if (item.name === action.payload) {
          return false;
        } else {
          return true;
        }
      }));
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
