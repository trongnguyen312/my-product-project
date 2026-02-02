import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { selectCartItems, selectCartTotalPrice } from '../../store/cart/cart.selectors';
import { removeFromCart } from '../../store/cart/cart.actions';

@Component({
    selector: 'app-cart-dropdown',
    templateUrl: './cart-dropdown.component.html',
    styleUrls: ['./cart-dropdown.component.scss']
})
export class CartDropdownComponent {
    items$ = this.store.select(selectCartItems);
    total$ = this.store.select(selectCartTotalPrice);

    constructor(
        private store: Store,
        private router: Router
    ) { }

    removeItem(productId: number, event: Event) {
        event.stopPropagation();
        this.store.dispatch(removeFromCart({ productId }));
    }

    viewCart() {
        this.router.navigate(['/cart']);
    }
}
