import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { BaseUrl } from "../BaseUrl";

export const createContainer = createAsyncThunk(
  "container/create",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const { userData } = getState()?.user;
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    console.log(payload);
    try {
      const response = await axios.post(
        `${BaseUrl}/container/create`,
        {
          title: payload,
        },
        config
      );
      console.log(response?.data);
      return response?.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getAllContainerTitle = createAsyncThunk(
  "container/get-title",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const { userData } = getState()?.user;
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    try {
      const response = await axios.get(`${BaseUrl}/container`, config);
      console.log(response);
      return response.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

const containerSlice = createSlice({
  name: "ContainerSlice",
  initialState: {},
  extraReducers: (builder) => {
    builder
      .addCase(createContainer.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createContainer.fulfilled, (state, action) => {
        state.loading = false;
        state.containerData = action.payload;
        state.error = undefined;
      })
      .addCase(createContainer.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serveErr = action?.error?.message;
      })
      .addCase(getAllContainerTitle.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllContainerTitle.fulfilled, (state, action) => {
        state.loading = false;
        state.containerTitles = action.payload;
        state.error = undefined;
      })
      .addCase(getAllContainerTitle.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serveErr = action?.error?.message;
      });
  },
});

export default containerSlice.reducer;
