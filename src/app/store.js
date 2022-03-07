import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import msgReducer from "../features/msg/msgSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    msg: msgReducer,
  },
});
