import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.state';

export const selectCartState =
  createFeatureSelector<CartState>('cart');

export const selectCartTotalQuantity = createSelector(
  selectCartState,
  state =>
    Object.values(state.items).reduce(
      (sum, item) => sum + item.quantity,
      0
    )
);
