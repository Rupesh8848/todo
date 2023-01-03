import { configureStore } from "@reduxjs/toolkit";
import containerSlice from "../Slices/containerSlice";
import todoSlice from "../Slices/todoSlice";
import userReducer from "../Slices/userReducer";
const Store = configureStore({
  reducer: {
    user: userReducer,
    container: containerSlice,
    todo: todoSlice,
  },
});

export default Store;
