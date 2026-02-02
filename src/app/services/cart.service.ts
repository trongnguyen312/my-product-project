import { Injectable } from '@angular/core';
import { CartItem } from '../store/cart/cart.state';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private readonly STORAGE_KEY = 'ecommerce_cart_v1';

    constructor() { }

    saveCart(items: CartItem[]): void {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
        } catch (e) {
            console.error('Error saving cart to local storage', e);
        }
    }

    loadCart(): CartItem[] {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch (e) {
            console.error('Error loading cart from local storage', e);
            return [];
        }
    }

    clearCart(): void {
        try {
            localStorage.removeItem(this.STORAGE_KEY);
        } catch (e) {
            console.error('Error clearing cart from local storage', e);
        }
    }
}
