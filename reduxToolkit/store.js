
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; // Update the import path based on your actual file structure

export const store = configureStore({
  reducer: {
    counterReducer,
  },
});

export default store;