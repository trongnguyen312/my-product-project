import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.state';

export const selectProductState =
  createFeatureSelector<ProductState>('product');

export const selectProductList = createSelector(
  selectProductState,
  state => state.list
);

export const selectSearchKeyword = createSelector(
  selectProductState,
  state => state.searchKeyword
);
