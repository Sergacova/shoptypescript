import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './utils/apiUrl';
import productReducer from "./store/productSlice"
import cartReducer from "./store/cartSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
 
  
    product: productReducer,
    cart: cartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware), // need for cache
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;