import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductsService } from './../services/products/products.service';
import { ProductsActionTypes } from './../+state/products.actions';
import { mergeMap, map, tap, catchError, filter } from 'rxjs/operators';
import * as productActions from './../+state/products.actions';
import { of } from 'rxjs';
import { Product } from '@demo-app/data-models';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';

@Injectable()
export class ProductsEffects {
  @Effect()
  loadFilteredProducts$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    filter((r: RouterNavigationAction) => r.payload.routerState.url.startsWith('/products')),
    map((r: RouterNavigationAction) => r.payload.routerState.root.queryParams['category']),
    mergeMap((category: string) =>
      this.productService
        .getProducts(category)
        .pipe(
          map((products: Product[]) => new productActions.LoadProductsSuccess(products)),
          catchError(error => of(new productActions.LoadProductsFail(error)))
        )
    )
  );

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(ProductsActionTypes.LoadProducts),
    mergeMap(() =>
      this.productService
        .getProducts()
        .pipe(
          map(
            (products: Product[]) =>
              new productActions.LoadProductsSuccess(products)
          ),
          catchError(error => of(new productActions.LoadProductsFail(error)))
        )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}
}
