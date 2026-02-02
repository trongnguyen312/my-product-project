import { Component, EventEmitter, Input, Output, ElementRef, HostListener } from '@angular/core';
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
    showCartDropdown = false;

    constructor(private store: Store, private eRef: ElementRef) { }

    onEnter() {
        this.store.dispatch(
            setSearchKeyword({ keyword: this.value })
        );
    }

    toggleCartDropdown(event: Event) {
        event.stopPropagation();
        this.showCartDropdown = !this.showCartDropdown;
    }

    @HostListener('document:click', ['$event'])
    clickout(event: any) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.showCartDropdown = false;
        }
    }

    toggleCollapsed() {
        this.isCollapsed = !this.isCollapsed;
        this.isCollapsedChange.emit(this.isCollapsed);
    }
}
