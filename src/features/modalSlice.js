import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
  isActiveItem: false,
  isActiveUpdateItme: false,
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

    setModalUpdateItem: (state, action) => {
      state.isActiveUpdateItme = !state.isActiveUpdateItme;
    },
  },
});

export default modalSlice.reducer;
export const { setModal, setModalItem, setModalUpdateItem } =
  modalSlice.actions;
