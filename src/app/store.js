import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import msgReducer from "../features/auth/msgSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    msg: msgReducer,
  },
});
