import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@demo-app/data-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }
}
