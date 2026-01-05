import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.state';

export const selectProductState =
  createFeatureSelector<ProductState>('product');

export const selectProductList = createSelector(
  selectProductState,
  state => state.list
);
