import { createSelector } from 'reselect';
import { RootState } from 'store';

export const getCartItems = (state: RootState) => state.cart.items;
export const getDonation = (state: RootState) => state.cart.donation;
export const getDiscount = (state: RootState) => state.cart.discount;
export const getProductsMap = (state: RootState) => state.products.productsMap;

export const getProductsTotal = createSelector(
  getCartItems,
  getProductsMap,
  (items, products) => {
    return Object.entries(items).reduce((sum, [id, count]) => {
      return sum + products[id].price * count;
    }, 0);
  }
);

export const getDiscountValue = createSelector(
  getDiscount,
  getProductsTotal,
  (discount, subtotal) => {
    return subtotal * discount;
  }
);

export const getDonationValue = createSelector(
  getDonation,
  getProductsTotal,
  (donation, subtotal) => {
    return subtotal * donation;
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
