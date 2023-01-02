import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../BaseUrl";

export const userLoggedInRedirect = createAction("user/logged-in");

export const userSignUp = createAsyncThunk(
  "user/register",
  async (formData, { rejectWithValue, getState, dispatch }) => {
    try {
      const response = await axios.post(`${BaseUrl}/user/signup`, formData);
      console.log(response);
      localStorage.setItem("userData", JSON.stringify(response?.data));
      return response?.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const userSignIn = createAsyncThunk(
  "user/signin",
  async (formData, { rejectWithValue, getState, dispatch }) => {
    try {
      const response = await axios.post(`${BaseUrl}/user/signin`, formData);
      localStorage.setItem("userData", JSON.stringify(response?.data));
      dispatch(userLoggedInRedirect());
      return response?.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const userLogOut = createAsyncThunk(
  "user/log-out",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      localStorage.removeItem("userData");
      return;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

const userDataFromLocalStorage = JSON.parse(localStorage.getItem("userData"));

const userSlice = createSlice({
  name: "User",
  initialState: { userData: userDataFromLocalStorage },
  extraReducers: (builder) => {
    builder
      .addCase(userSignUp.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(userSignUp.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
        state.appErr = undefined;
        state.serveErr = undefined;
        state.userLoggedIn = false;
      })
      .addCase(userSignUp.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serveErr = action?.error?.message;
      })
      .addCase(userSignIn.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(userSignIn.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
        state.appErr = undefined;
        state.serveErr = undefined;
        state.userLoggedIn = false;
      })
      .addCase(userSignIn.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serveErr = action?.error?.message;
      })
      .addCase(userLogOut.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(userLogOut.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = undefined;
        state.appErr = undefined;
        state.serveErr = undefined;
      })
      .addCase(userLogOut.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serveErr = action?.error?.message;
      })
      .addCase(userLoggedInRedirect, (state, action) => {
        state.userLoggedIn = true;
      });
  },
});

export default userSlice.reducer;
