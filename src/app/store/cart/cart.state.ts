export interface CartItem {
  productId: number;
  quantity: number;
}

export interface CartState {
  items: { [productId: number]: CartItem };
}

export const initialCartState: CartState = {
  items: {}
};
