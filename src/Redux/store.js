import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../Redux/Apis/auth.Api";
import { productApi } from "./Apis/product.Api";
import { usersApi } from "./Apis/usersApi";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(authApi.middleware)
      .concat(usersApi.middleware),
});

export default store;
