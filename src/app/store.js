import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "../features/orderSlice";
import authSlice from "../features/authSlice";
import loaderSlice from "../features/loaderSlice";
import filterSlice from "../features/filterSlice";

const store = configureStore({
  reducer: {
    order: orderSlice,
    auth: authSlice,
    loader: loaderSlice,
    filter: filterSlice,
  },
});

export default store;
