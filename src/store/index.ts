import { configureStore } from '@reduxjs/toolkit';

import productsReducer from 'store/slices/products';
import cartReducer from 'store/slices/cart';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
