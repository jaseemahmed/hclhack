import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./userApis";

const initialState = {
  user: {},
  token: "",
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const userState = (state) => state?.user?.user;

export default userSlice.reducer;
