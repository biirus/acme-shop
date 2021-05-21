import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts, Product } from 'api/products';

export const fetchProducs = createAsyncThunk('products/fetch', async () => {
  const products = await getProducts();
  return products;
});

export type ProductsState = {
  readonly productsMap: Record<Product['id'], Product>;
  readonly ui: {
    readonly status: 'idle' | 'pending';
  };
};

const initialState: ProductsState = {
  productsMap: {},
  ui: {
    status: 'idle',
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducs.pending, (state) => {
        state.ui.status = 'pending';
      })
      .addCase(fetchProducs.fulfilled, (state, action) => {
        state.ui.status = 'idle';
        action.payload.forEach((p) => {
          state.productsMap[p.id] = p;
        });
      });
  },
});

export default productsSlice.reducer;
