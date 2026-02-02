import { createReducer, on } from '@ngrx/store';
import { initialCartState } from './cart.state';
import * as CartActions from './cart.actions';

export const cartReducer = createReducer(
  initialCartState,

  on(CartActions.addToCart, (state, { item }) => {
    const existing = state.items[item.productId];
    const newQuantity = existing ? existing.quantity + 1 : 1;

    if (newQuantity > 99) return state;

    return {
      ...state,
      items: {
        ...state.items,
        [item.productId]: existing
          ? { ...existing, quantity: newQuantity }
          : { ...item, quantity: 1 }
      }
    };
  }),

  on(CartActions.removeFromCart, (state, { productId }) => {
    const newItems = { ...state.items };
    delete newItems[productId];
    return { ...state, items: newItems };
  }),

  on(CartActions.updateQuantity, (state, { productId, quantity }) => {
    if (quantity < 1 || quantity > 99) return state;
    const existing = state.items[productId];
    if (!existing) return state;

    return {
      ...state,
      items: {
        ...state.items,
        [productId]: { ...existing, quantity }
      }
    };
  }),

  on(CartActions.clearCart, (state) => ({
    ...state,
    items: {}
  })),

  on(CartActions.loadCartSuccess, (state, { items }) => {
    const itemsMap = items.reduce((acc, item) => ({
      ...acc,
      [item.productId]: item
    }), {});

    return {
      ...state,
      items: itemsMap,
      loaded: true
    };
  })
);
