import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userIdentity: "",
  isLoading: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export default loaderSlice.reducer;
export const { setLoader } = loaderSlice.actions;
