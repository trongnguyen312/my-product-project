import { createReducer, on } from '@ngrx/store';
import { initialProductState } from './product.state';
import * as ProductActions from './product.actions';

export const productReducer = createReducer(
  initialProductState,

  on(ProductActions.loadProductsSuccess, (state, { products }) => {
    console.log('LOAD INITIAL', products);
    return {
      ...state,
      list: [...state.list, ...products],
      page: 1,
      hasMore: products.length > 0
    };
  }),
);
