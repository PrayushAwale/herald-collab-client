import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
  isActiveItem: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.isActive = !state.isActive;
    },

    setModalItem: (state, action) => {
      state.isActiveItem = !state.isActiveItem;
    },
  },
});

export default modalSlice.reducer;
export const { setModal, setModalItem } = modalSlice.actions;
