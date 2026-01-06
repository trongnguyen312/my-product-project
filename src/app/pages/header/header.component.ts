import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartTotalQuantity } from '@store/cart/cart.selectors';
import { setSearchKeyword } from '@store/product/product.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Input() isCollapsed = false;
    @Output() isCollapsedChange = new EventEmitter<boolean>();

    cartQuantity$ = this.store.select(selectCartTotalQuantity);
    value: string = '';

    constructor(private store: Store) { }

    onEnter() {
        this.store.dispatch(
            setSearchKeyword({ keyword: this.value })
        );
    }

    toggleCollapsed() {
        this.isCollapsed = !this.isCollapsed;
        this.isCollapsedChange.emit(this.isCollapsed);
    }
}
