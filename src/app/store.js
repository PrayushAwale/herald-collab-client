import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "../features/orderSlice";
import authSlice from "../features/authSlice";
import loaderSlice from "../features/loaderSlice";

const store = configureStore({
  reducer: {
    order: orderSlice,
    auth: authSlice,
    loader: loaderSlice,
  },
});

export default store;
