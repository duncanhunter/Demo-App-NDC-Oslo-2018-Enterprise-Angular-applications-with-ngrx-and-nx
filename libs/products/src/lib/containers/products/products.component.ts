import { Component, OnInit } from '@angular/core';
import { ProductsState } from './../../+state/products.reducer';
import { Store, select } from '@ngrx/store';
import { getProducts } from './../../+state';
import { Observable } from 'rxjs';
import { Product } from '@demo-app/data-models';
import { LoadProducts } from './../../+state/products.actions';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private router: Router,
    private store: Store<ProductsState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadProducts());
    this.products$ = this.store.pipe(select(getProducts));
  }

  updateUrlFilters(category: string): void {
    const navigationExtras: NavigationExtras = {
      replaceUrl: true,
      queryParams: {category}
    };
    this.router.navigate([`/products`], navigationExtras);
  }

}
