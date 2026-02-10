import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { selectProductList, selectSearchKeyword } from '@store/product/product.selectors';
import { selectCartTotalQuantity } from '@store/cart/cart.selectors';
import { Store } from '@ngrx/store';
import * as CartActions from '@store/cart/cart.actions';
import * as ProductActions from '@store/product/product.actions';
import { ProductService } from './service/product.service';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewChecked {
  products$ = this.store.select(selectProductList);
  cartQuantity$ = this.store.select(selectCartTotalQuantity);
  page = 1;
  pageSize = 10;
  loading = false;
  value: string = '';
  @ViewChild('scrollContainer') scrollContainer!: ElementRef; // Thêm Template Reference vào div
  private storedScrollTop = 0;
  options: AnimationOptions = {
    path: 'assets/shopping_cart.json',
  };
  constructor(
    private store: Store,
    private productService: ProductService,
    private detechChange: ChangeDetectorRef,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    // MOCK DATA (tạm)
    this.store.select(selectSearchKeyword)
      .pipe(
        distinctUntilChanged(),
        debounceTime(300)
      )
      .subscribe(keyword => {
        console.log('Từ khóa tìm kiếm:', keyword);
        this.value = keyword;
        this.searchProduct();
      });
    this.searchProduct();
  }

  ngAfterViewChecked() {
    if (this.storedScrollTop > 0) {
      console.log('tôi scroll lại nè <3');
      this.scrollContainer.nativeElement.scrollTop = this.storedScrollTop;
      this.storedScrollTop = 0;
    }
  }

  addToCart(product: any) {
    this.store.dispatch(CartActions.addToCart({
      item: {
        productId: product.id,
        name: product.name,
        price: product.price
      }
    }));
  }

  searchProduct() {
    this.store.dispatch(
      ProductActions.loadProductsSuccess({
        products: [
          { id: 1, name: 'iPhone 15 Pro Max', price: 34990000, rating: 5 },
          { id: 2, name: 'Samsung Galaxy S24 Ultra', price: 29990000, rating: 5 },
          { id: 3, name: 'MacBook Air M3', price: 27500000, rating: 4 },
          { id: 4, name: 'Sony WH-1000XM5', price: 6500000, rating: 4 },
          { id: 5, name: 'iPad Pro M2', price: 21990000, rating: 5 },
          { id: 6, name: 'Apple Watch Series 9', price: 10500000, rating: 4 },
          { id: 7, name: 'Dell XPS 13 9315', price: 24000000, rating: 5 },
          { id: 8, name: 'Logitech MX Master 3S', price: 2200000, rating: 4 },
          { id: 9, name: 'AirPods Pro Gen 2', price: 5900000, rating: 4 },
          { id: 10, name: 'Asus ROG Zephyrus G14', price: 38500000, rating: 4 },
          { id: 11, name: 'Google Pixel 8 Pro', price: 18500000, rating: 4 },
          { id: 12, name: 'Bàn phím cơ Keychron Q1', price: 3500000, rating: 4 },
          { id: 13, name: 'Màn hình LG DualUp', price: 12900000, rating: 4 },
          { id: 14, name: 'Loa Marshall Stanmore III', price: 9200000, rating: 4 },
          { id: 15, name: 'Kindle Paperwhite 5', price: 3800000, rating: 4 },
          { id: 16, name: 'GoPro Hero 12', price: 10200000, rating: 4 },
          { id: 17, name: 'Sạc dự phòng Anker 737', price: 2800000, rating: 4 },
          { id: 18, name: 'Nintendo Switch OLED', price: 7500000, rating: 4 },
          { id: 19, name: 'Ổ cứng SSD Samsung T7 1TB', price: 2500000, rating: 4 },
          { id: 20, name: 'Chuột Gaming Razer DeathAdder V3', price: 1800000, rating: 4 },
          { id: 21, name: 'Máy tính bảng Xiaomi Pad 6', price: 8900000, rating: 4 },
          { id: 22, name: 'Máy ảnh Fujifilm X-T5', price: 42000000, rating: 5 }
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
      //this.pageSize+=10;
      this.onScroll();
    }
  }

  onScroll() {
    var body = {
      page: this.page,
      pageSize: this.pageSize
    };
    this.store.dispatch(
      ProductActions.loadMoreProductsSuccess({
        products: [
          { id: 23, name: 'nang am xa dan', price: 25000000, rating: 5 },
          { id: 24, name: 'con mua ngang qua', price: 22000000, rating: 5 }
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

  routerToDetail(id: number) {
    this.storedScrollTop = this.scrollContainer.nativeElement.scrollTop;
    this.router.navigate(['/product/detail', id]);
  }
}
