import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    emptyCart: (state, action) => {
      state.cartItem = [];
    },
    addIntoCart: (state, action) => {
      const newItem = action.payload;
      state.cartItem = [...state.cartItem, newItem];
    },
    amount: (state, action) => {
      const id = action.payload;
      const newArray = state.cartItem.map((item) => {
        if (item.id === id) {
          item.quantity = item.quantity + 1;
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
            item.quantity = item.quantity + 1;
          }
          return item;
        });
        state.cartItem = newArray;
      } else if (increment === "input") {
        console.log("first");
        const { value } = action.payload;
        const newArray = state.cartItem.map((item) => {
          if (item.id === id) {
            item.quantity = value;
          }
          return item;
        });
        state.cartItem = newArray;
      } else {
        const newArray = state.cartItem.map((item) => {
          if (item.id === id) {
            if (item.quantity <= 0) {
              return item;
            }
            item.quantity = item.quantity - 1;
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
          item.quantity = Number(value);
        }
        return item;
      });
      state.cartItem = newArray;
    },
  },
});

export default orderSlice.reducer;
export const { addIntoCart, amount, updateAmount, onChangeInput, emptyCart } =
  orderSlice.actions;
