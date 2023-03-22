import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  table_number: 1,
  description: "",
  cartItem: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addIntoCart: (state, action) => {
      const newItem = action.payload;
      state.cartItem = [...state.cartItem, newItem];
    },
    amount: (state, action) => {
      const id = action.payload;
      const newArray = state.cartItem.map((item) => {
        if (item.id === id) {
          item.amount = item.amount + 1;
        }
        return item;
      });
      state.cartItem = newArray;
    },
    updateAmount: (state, action) => {
      const { id, increment } = action.payload;
      if (increment) {
        const newArray = state.cartItem.map((item) => {
          if (item.id === id) {
            item.amount = item.amount + 1;
          }
          return item;
        });
        state.cartItem = newArray;
      } else if (increment === "input") {
        console.log("first");
        const { value } = action.payload;
        const newArray = state.cartItem.map((item) => {
          if (item.id === id) {
            item.amount = value;
          }
          return item;
        });
        state.cartItem = newArray;
      } else {
        const newArray = state.cartItem.map((item) => {
          if (item.id === id) {
            if (item.amount <= 0) {
              return item;
            }
            item.amount = item.amount - 1;
          }
          return item;
        });
        state.cartItem = newArray;
      }
    },
    onChangeInput: (state, action) => {
      const { id, value } = action.payload;
      const newArray = state.cartItem.map((item) => {
        if (item.id === id) {
          item.amount = Number(value);
        }
        return item;
      });
      state.cartItem = newArray;
    },
  },
});

export default orderSlice.reducer;
export const { addIntoCart, amount, updateAmount, onChangeInput } =
  orderSlice.actions;
