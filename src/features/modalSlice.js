import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.isActive = !state.isActive;
    },
  },
});

export default modalSlice.reducer;
export const { setModal } = modalSlice.actions;
