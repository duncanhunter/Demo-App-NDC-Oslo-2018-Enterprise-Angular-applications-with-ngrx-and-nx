import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductsService } from './../services/products/products.service';
import { ProductsActionTypes } from './../+state/products.actions';
import { mergeMap, map, tap, catchError } from 'rxjs/operators';
import * as productActions from './../+state/products.actions';
import { of } from 'rxjs';
import { Product } from '@demo-app/data-models';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';

@Injectable()
export class ProductsEffects {
  @Effect({dispatch: false})
  loadFilteredProducts$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    tap((r: RouterNavigationAction) => {
      console.log('route effect', r.payload.routerState.root.queryParams['category']);
      // debugger;
    })
  )


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
