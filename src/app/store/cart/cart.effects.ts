import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import * as CartActions from './cart.actions';
import { CartService } from '../../services/cart.service';
import { selectCartItems } from './cart.selectors';

@Injectable()
export class CartEffects {
    loadCart$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.loadCartFromStorage),
            map(() => {
                const items = this.cartService.loadCart();
                return CartActions.loadCartSuccess({ items });
            })
        )
    );

    saveCart$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(
                    CartActions.addToCart,
                    CartActions.removeFromCart,
                    CartActions.updateQuantity,
                    CartActions.clearCart,
                    CartActions.saveCartToStorage
                ),
                withLatestFrom(this.store.select(selectCartItems)),
                tap(([action, items]) => {
                    this.cartService.saveCart(items);
                })
            ),
        { dispatch: false }
    );

    constructor(
        private actions$: Actions,
        private cartService: CartService,
        private store: Store
    ) { }
}
