import { createReducer, on } from '@ngrx/store';
import { initialCartState } from './cart.state';
import * as CartActions from './cart.actions';

export const cartReducer = createReducer(
  initialCartState,

  on(CartActions.addToCart, (state, { productId }) => {
    const existing = state.items[productId];
    return {
      ...state,
      items: {
        ...state.items,
        [productId]: existing
          ? { ...existing, quantity: existing.quantity + 1 }
          : { productId, quantity: 1 }
      }
    };
  })
);
