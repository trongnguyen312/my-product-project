import { createAction, props } from '@ngrx/store';

export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ item: { productId: number; name: string; price: number; image?: string } }>()
);

export const loadCartFromStorage = createAction('[Cart] Load From Storage');

export const loadCartSuccess = createAction(
  '[Cart] Load From Storage Success',
  props<{ items: any[] }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove Item',
  props<{ productId: number }>()
);

export const updateQuantity = createAction(
  '[Cart] Update Quantity',
  props<{ productId: number; quantity: number }>()
);

export const clearCart = createAction('[Cart] Clear Cart');

export const saveCartToStorage = createAction('[Cart] Save To Storage');
