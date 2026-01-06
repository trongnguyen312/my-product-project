import {Product} from '../../model/product.model';

export interface ProductState {
  list: Product[];
  page: number;
  hasMore: boolean;
  searchKeyword: string;
}

export const initialProductState: ProductState = {
  list: [],
  page: 1,
  hasMore: true,
  searchKeyword: '',
};
