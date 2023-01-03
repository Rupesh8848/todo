import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "../BaseUrl";

export const addTodo = createAsyncThunk(
  "todo/add",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const { token } = getState()?.user?.userData;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const containerId = getState()?.container.selectedContainer
      ? getState()?.container.selectedContainer
      : getState()?.container.containerTitles[0]?._id;
    try {
      const response = await axios.post(
        `${BaseUrl}/todo`,
        {
          description: payload,
          containerId,
        },
        config
      );
      return response.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getTodos = createAsyncThunk(
  "todo/get",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const containerId = getState()?.container?.selectedContainer;
    const config = {
      headers: {
        Authorization: `Bearer ${getState()?.user?.userData?.token}`,
      },
    };
    try {
      const response = await axios.get(
        `${BaseUrl}/todo/${containerId}`,
        config
      );
      return response.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todo/delete",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${getState()?.user?.userData?.token}`,
      },
    };
    try {
      const response = await axios.delete(`${BaseUrl}/todo/${payload}`, config);
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

const todoSlice = createSlice({
  name: "TodoSlice",
  initialState: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTodo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.addedTodo = action.payload;
        state.error = undefined;
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serveErr = action?.error?.message;
      })
      .addCase(getTodos.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todoList = action.payload;
        state.error = undefined;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serveErr = action?.error?.message;
      })
      .addCase(deleteTodo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.deletedTodo = action.payload;
        state.error = undefined;
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serveErr = action?.error?.message;
      });
  },
});

export default todoSlice.reducer;
