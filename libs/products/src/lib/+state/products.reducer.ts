import { Action } from '@ngrx/store';
import { ProductsActions, ProductsActionTypes } from './products.actions';
import { Product } from '@demo-app/data-models';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface ProductsData extends EntityState<Product> {
  error: string;
  selectedProductId: number;
  loading: boolean;
}

export interface ProductsState {
  readonly products: ProductsData;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({});

export const initialState: ProductsData = adapter.getInitialState({
  error: '',
  selectedProductId: null,
  loading: false
});

export function productsReducer(
  state = initialState,
  action: ProductsActions
): ProductsData {
  switch (action.type) {
    case ProductsActionTypes.LoadProducts:
      return { ...state, loading: true };

    case ProductsActionTypes.LoadProductsSuccess: {
      return adapter.addAll(action.payload, { ...state, error: '' });
    }

    case ProductsActionTypes.LoadProductsFail: {
      return adapter.removeAll({ ...state, error: action.payload });
    }

    default:
      return state;
  }
}

export const getSelectedProductId = (state: ProductsData) =>
  state.selectedProductId;

export const {
  // select the array of user ids
  selectIds: selectProductIds,

  // select the dictionary of Products entities
  selectEntities: selectProductEntities,

  // select the array of Productss
  selectAll: selectAllProducts,

  // select the total Products count
  selectTotal: selectProductsTotal
} = adapter.getSelectors();
