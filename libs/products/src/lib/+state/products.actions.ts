import { Action } from '@ngrx/store';

export enum ProductsActionTypes {
  LoadProducts = '[Products Page] Load Products',
  LoadProductsSuccess = '[Products API] Load Products Success',
  LoadProductsFail = '[Products API] LoadProducts Fail'
}

export class LoadProducts implements Action {
  readonly type = ProductsActionTypes.LoadProducts;
}
export class LoadProductsSuccess implements Action {
  readonly type = ProductsActionTypes.LoadProductsSuccess;
  constructor(public payload: any) {}
}

export class LoadProductsFail implements Action {
  readonly type = ProductsActionTypes.LoadProductsFail;
  constructor(public payload: any) {}
}

export type ProductsActions = LoadProducts | LoadProductsSuccess | LoadProductsFail;
