import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tableNumber: 1,
  cartItem: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    emptyCart: (state, action) => {
      state.cartItem = [];
    },
    emptyTableNumber: (state, action) => {
      state.tableNumber = 0;
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
      const { value } = action.payload;
      state.tableNumber = value;
      state.cartItem.map((ordersLoad) => {
        ordersLoad.table_number = value;
      });
    },
    updateTableNumber: (state, action) => {
      const type = action.payload;
      if (type) {
        state.tableNumber = state.tableNumber + 1;
      } else {
        if (state.tableNumber === 1) {
          return;
        } else {
          state.tableNumber = state.tableNumber - 1;
        }
      }
    },
  },
});

export default orderSlice.reducer;
export const {
  addIntoCart,
  amount,
  updateAmount,
  onChangeInput,
  emptyCart,
  emptyTableNumber,
  updateTableNumber,
} = orderSlice.actions;
