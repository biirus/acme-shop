import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import productsReducer from 'store/slices/products';
import cartReducer from 'store/slices/cart';
import infoReducer from 'store/slices/info';

export const store = configureStore({
  reducer: {
    info: infoReducer,
    cart: cartReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
