import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartItems, selectCartTotalPrice } from '../../store/cart/cart.selectors';
import { removeFromCart, updateQuantity } from '../../store/cart/cart.actions';

@Component({
    selector: 'app-cart-page',
    templateUrl: './cart-page.component.html',
    styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
    items$ = this.store.select(selectCartItems);
    total$ = this.store.select(selectCartTotalPrice);

    constructor(private store: Store) { }

    updateQty(productId: number, quantity: number) {
        if (quantity < 1) return;
        if (quantity > 99) quantity = 99;
        this.store.dispatch(updateQuantity({ productId, quantity }));
    }

    removeItem(productId: number) {
        this.store.dispatch(removeFromCart({ productId }));
    }

    checkout() {
        alert('Chức năng thanh toán đang phát triển!');
    }
}
