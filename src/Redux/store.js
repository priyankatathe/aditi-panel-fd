import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../Redux/Apis/auth.Api";
import { productApi } from "./Apis/product.Api";
import { usersApi } from "./Apis/usersApi";
import { OrderApi } from "./Apis/OrdersApi";
import { dashboardApi } from "./Apis/dashboardApi";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [OrderApi.reducerPath]: OrderApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(authApi.middleware)
      .concat(usersApi.middleware)
      .concat(OrderApi.middleware)
      .concat(dashboardApi.middleware)
});

export default store;
