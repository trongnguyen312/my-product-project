import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {selectProductList} from '@store/product/product.selectors';
import {selectCartTotalQuantity} from '@store/cart/cart.selectors';
import {Store} from '@ngrx/store';
import * as CartActions from '@store/cart/cart.actions';
import * as ProductActions from '@store/product/product.actions';
import {ProductService} from './service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$ = this.store.select(selectProductList);
  cartQuantity$ = this.store.select(selectCartTotalQuantity);
  page = 1;
  pageSize = 10;
  loading = false;

  constructor(
    private store: Store,
    private productService: ProductService,
    private detechChange: ChangeDetectorRef,
  ) {

  }

  ngOnInit(): void {
    // MOCK DATA (tạm)
    this.searchProduct();
  }

  addToCart(productId: number) {
    this.store.dispatch(CartActions.addToCart({productId}));
  }
  listPro: any = [];
  searchProduct() {
    this.listPro = [
      {id: 1, name: 'iPhone 15', price: 25000000, rating: 5},
      {id: 2, name: 'Samsung S24', price: 22000000, rating: 5},
      {id: 1, name: 'iPhone 15', price: 25000000, rating: 5},
      {id: 2, name: 'Samsung S24', price: 22000000, rating: 5},
      {id: 1, name: 'iPhone 15', price: 25000000, rating: 5},
      {id: 2, name: 'Samsung S24', price: 22000000, rating: 5},
      {id: 1, name: 'iPhone 15', price: 25000000, rating: 5},
      {id: 2, name: 'Samsung S24', price: 22000000, rating: 5},
      {id: 1, name: 'iPhone 15', price: 25000000, rating: 5},
      {id: 2, name: 'Samsung S24', price: 22000000, rating: 5},
      {id: 1, name: 'iPhone 15', price: 25000000, rating: 5},
      {id: 2, name: 'Samsung S24', price: 22000000, rating: 5},
      {id: 1, name: 'iPhone 15', price: 25000000, rating: 5},
      {id: 2, name: 'Samsung S24', price: 22000000, rating: 5},
      {id: 1, name: 'iPhone 15', price: 25000000, rating: 5},
      {id: 2, name: 'Samsung S24', price: 22000000, rating: 5},
      {id: 1, name: 'iPhone 15', price: 25000000, rating: 5},
      {id: 2, name: 'Samsung S24', price: 22000000, rating: 5},
      {id: 1, name: 'iPhone 15', price: 25000000, rating: 5},
      {id: 2, name: 'Samsung S24', price: 22000000, rating: 5},
      {id: 1, name: 'iPhone 15', price: 25000000, rating: 5},
      {id: 2, name: 'Samsung S24', price: 22000000, rating: 5},
    ]
    this.store.dispatch(
      ProductActions.loadProductsSuccess({
        products: [
          {id: 1, name: 'iPhone 15', price: 25000000, rating: 5},
          {id: 2, name: 'Samsung S24', price: 22000000, rating: 5},
          {id: 1, name: 'iPhone 15', price: 25000000, rating: 5},
          {id: 2, name: 'Samsung S24', price: 22000000, rating: 5},
          {id: 1, name: 'iPhone 15', price: 25000000, rating: 5},
          {id: 2, name: 'Samsung S24', price: 22000000, rating: 5},
          {id: 1, name: 'iPhone 15', price: 25000000, rating: 5},
          {id: 2, name: 'Samsung S24', price: 22000000, rating: 5},
          {id: 1, name: 'iPhone 15', price: 25000000, rating: 5},
          {id: 2, name: 'Samsung S24', price: 22000000, rating: 5},
          {id: 1, name: 'iPhone 15', price: 25000000, rating: 5},
          {id: 2, name: 'Samsung S24', price: 22000000, rating: 5},
          {id: 1, name: 'iPhone 15', price: 25000000, rating: 5},
          {id: 2, name: 'Samsung S24', price: 22000000, rating: 5},
          {id: 1, name: 'iPhone 15', price: 25000000, rating: 5},
          {id: 2, name: 'Samsung S24', price: 22000000, rating: 5},
          {id: 1, name: 'iPhone 15', price: 25000000, rating: 5},
          {id: 2, name: 'Samsung S24', price: 22000000, rating: 5},
          {id: 1, name: 'iPhone 15', price: 25000000, rating: 5},
          {id: 2, name: 'Samsung S24', price: 22000000, rating: 5},
          {id: 1, name: 'iPhone 15', price: 25000000, rating: 5},
          {id: 2, name: 'Samsung S24', price: 22000000, rating: 5},
        ]
      })
    );
    // this.productService.getProducts().subscribe(res => {
    //   if (res.status == 200){
    //     res.data = res.data.map((item: any) => ({
    //       id: item.id,
    //       name: item.name,
    //       price: item.price,
    //       rating: item.rating
    //     }));
    //     this.store.dispatch(
    //       ProductActions.loadProductsSuccess({
    //         products: res.data
    //       })
    //     );
    //   }
    // });
  }

  onNativeScroll(event: any) {
    const element = event.target;
    // Khoảng cách từ trên cùng đến điểm đang đứng
    const scrollTop = element.scrollTop;
    // Chiều cao của khung hiển thị (500px)
    const viewportHeight = element.clientHeight;
    // Tổng chiều cao thực tế của toàn bộ danh sách Grid
    const totalHeight = element.scrollHeight;
    // Kiểm tra nếu cách đáy khoảng 100px thì mới gọi load thêm
    if ((scrollTop + viewportHeight) >= (totalHeight - 100)) {
      this.onScroll();
    }
  }

  onScroll() {
    var list = [
      {id: 1, name: 'nang am xa dan', price: 25000000, rating: 5},
      {id: 2, name: 'con mua ngang qua', price: 22000000, rating: 5}
    ]
    this.listPro = [...this.listPro, ...list];
    var body = {
      page: this.page,
      pageSize: this.pageSize
    }
    this.store.dispatch(
      ProductActions.loadProductsSuccess({
        products: [
          {id: 1, name: 'nang am xa dan', price: 25000000, rating: 5},
          {id: 2, name: 'con mua ngang qua', price: 22000000, rating: 5}
        ]
      })
    );
    this.detechChange.detectChanges();
    // this.productService
    //   .getProducts(body)
    //   .subscribe(res => {
    //     this.store.dispatch(
    //       ProductActions.loadProductsSuccess({
    //         products: res.data
    //       })
    //     );
    //     this.page++;
    //     this.loading = false;
    //   });
  }
}
