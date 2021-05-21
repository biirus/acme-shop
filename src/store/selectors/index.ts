import { createSelector } from 'reselect';
import { RootState } from 'store';

export const getInfo = (state: RootState) => state.info;
export const getProductsUI = (state: RootState) => state.products.ui;
export const getCartItems = (state: RootState) => state.cart.items;
export const getDonation = (state: RootState) => state.cart.donation;
export const getDiscount = (state: RootState) => state.cart.discount;
export const getProductsMap = (state: RootState) => state.products.productsMap;

export const getProductsTotal = createSelector(
  getCartItems,
  getProductsMap,
  (items, products) => {
    return Object.entries(items).reduce((sum, [id, count]) => {
      return sum + (products[id]?.price ?? 0) * count;
    }, 0);
  }
);

export const getDiscountValue = createSelector(
  getDiscount,
  getProductsTotal,
  (discount, subtotal) => {
    return (subtotal * discount) / 100;
  }
);

export const getDonationValue = createSelector(
  getDonation,
  getProductsTotal,
  (donation, subtotal) => {
    return (subtotal * donation) / 100;
  }
);

export const getTotal = createSelector(
  getDiscountValue,
  getDonationValue,
  getProductsTotal,
  (discount, donation, subtotal) => {
    return subtotal + donation - discount;
  }
);
