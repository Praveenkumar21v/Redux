import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("counter/fetchTodos", async () => {
  const response = await axios.get("http://localhost:3002/todos");

  return response.data;
});

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
    todos: [],
    error: null,
    loading: false,
  },

  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.error = null;
        state.todos = [];
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.error = null;
        state.todos = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.error = action.error.message;
        state.todos = [];
        state.loading = false;
      });
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
