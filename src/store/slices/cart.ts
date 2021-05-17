import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'api/products';

export type CartState = {
  items: Record<Product['id'], number>;
  discount: number;
  donation: number;
};

const initialState: CartState = {
  items: {},
  discount: 0,
  donation: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<Product['id']>) {
      if (!state.items[action.payload]) {
        state.items[action.payload] = 0;
      }

      state.items[action.payload] += 1;
    },

    decrement(state, action: PayloadAction<Product['id']>) {
      if (!state.items[action.payload]) {
        state.items[action.payload] = 0;
      }

      state.items[action.payload] = Math.max(
        0,
        state.items[action.payload] - 1
      );
    },

    changeDonation(state, action: PayloadAction<number>) {
      state.donation = action.payload;
    },

    applyDiscount(state, action: PayloadAction<number>) {
      state.discount = action.payload;
    },
  },
});

export const { increment, decrement, changeDonation, applyDiscount } =
  cartSlice.actions;

export default cartSlice.reducer;
