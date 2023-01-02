import { configureStore } from "@reduxjs/toolkit";
import containerSlice from "../Slices/containerSlice";
import userReducer from "../Slices/userReducer";
const Store = configureStore({
  reducer: {
    user: userReducer,
    container: containerSlice,
  },
});

export default Store;
