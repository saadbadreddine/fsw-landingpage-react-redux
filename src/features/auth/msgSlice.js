import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import msgService from "./msgService";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const sendMsg = createAsyncThunk(
  "/contact",
  async (userData, thunkAPI) => {
    try {
      return await msgService.sendMsg(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const msgSlice = createSlice({
  name: "msg",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMsg.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendMsg.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(sendMsg.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = msgSlice.actions;
export default msgSlice.reducer;
