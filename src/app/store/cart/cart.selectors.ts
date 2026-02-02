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

export const selectCartItems = createSelector(
  selectCartState,
  state => Object.values(state.items)
);

export const selectCartTotalPrice = createSelector(
  selectCartItems,
  items => items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
);

export const selectCartLoaded = createSelector(
  selectCartState,
  state => state.loaded
);

export const selectIsCartEmpty = createSelector(
  selectCartTotalQuantity,
  total => total === 0
);
