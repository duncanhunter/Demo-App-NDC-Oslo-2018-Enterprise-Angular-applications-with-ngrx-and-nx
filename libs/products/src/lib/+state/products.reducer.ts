import { Action } from '@ngrx/store';
import { ProductsActions, ProductsActionTypes } from './products.actions';
import { Product } from '@demo-app/data-models';

/**
 * Interface for the 'Products' data used in
 *  - ProductsState, and
 *  - productsReducer
 */
export interface ProductsData {
  loading: boolean;
  products: Product[];
  error: '';
}

/**
 * Interface to the part of the Store containing ProductsState
 * and other information related to ProductsData.
 */
export interface ProductsState {
  readonly products: ProductsData;
}

export const initialState: ProductsData = {
  loading: false,
  products: [],
  error: ''
};

export function productsReducer(
  state = initialState,
  action: ProductsActions
): ProductsData {
  switch (action.type) {
    case ProductsActionTypes.LoadProducts:
      return { ...state, loading: true };

    case ProductsActionTypes.LoadProductsSuccess: {
      return { ...state, products: action.payload, loading: false, error: '' };
    }
    case ProductsActionTypes.LoadProductsFail: {
      return {
        ...state,
        products: null,
        loading: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
}
