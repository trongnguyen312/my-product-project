import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {Product} from '../../../model/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {

  private apiUrl = 'https://api.example.com/products';

  constructor(private http: HttpClient) {}

  getProducts(body: any): Observable<any> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
