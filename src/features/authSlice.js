import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getTokenHolder: (state, action) => {
      state.token = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { getTokenHolder } = authSlice.actions;
