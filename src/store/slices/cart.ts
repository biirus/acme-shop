import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'api/products';

export type CartState = {
  readonly items: Record<Product['id'], number>;
  readonly discount: number;
  readonly donation: number;
};

const initialState: CartState = {
  items: {
    '5F6D806277FEA_11189': 3,
    '5F6D80A544056_9908': 2,
    '202695M21302': 1,
  },
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

    changeAmount(
      state,
      action: PayloadAction<{ id: Product['id']; amount: number }>
    ) {
      state.items[action.payload.id] = action.payload.amount || 0;
    },

    remove(state, action: PayloadAction<Product['id']>) {
      delete state.items[action.payload];
    },

    changeDonation(state, action: PayloadAction<number>) {
      state.donation = action.payload;
    },

    applyDiscount(state, action: PayloadAction<number>) {
      state.discount = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  changeAmount,
  remove,
  changeDonation,
  applyDiscount,
} = cartSlice.actions;

export default cartSlice.reducer;
