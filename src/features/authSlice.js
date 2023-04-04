import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getTokenHolder: (state, action) => {
      state.token = action.payload;
    },
    setCredential: (state, action) => {
      const { username, email } = action.payload;
      state.email = email;
      state.username = username;
    },
  },
});

export default authSlice.reducer;
export const { getTokenHolder, setCredential } = authSlice.actions;
