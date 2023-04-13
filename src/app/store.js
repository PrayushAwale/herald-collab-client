import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "../features/orderSlice";
import authSlice from "../features/authSlice";
import loaderSlice from "../features/loaderSlice";
import filterSlice from "../features/filterSlice";
import modalSlice from "../features/modalSlice";
const store = configureStore({
  reducer: {
    order: orderSlice,
    auth: authSlice,
    loader: loaderSlice,
    filter: filterSlice,
    modal: modalSlice,
  },
});

export default store;
