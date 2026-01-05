import { createAction, props } from '@ngrx/store';

export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ productId: number }>()
);
