export interface CartItem {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface CartState {
  items: { [productId: number]: CartItem };
  loaded: boolean;
}

export const initialCartState: CartState = {
  items: {},
  loaded: false
};
