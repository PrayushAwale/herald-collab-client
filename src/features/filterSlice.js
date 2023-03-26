import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searched: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    handleInput: (state, action) => {
      state.searched = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { handleInput } = filterSlice.actions;
