import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductsData } from './products.reducer';
export const getProductsState = createFeatureSelector<ProductsData>('products');
export const getProducts = createSelector(getProductsState, state => state.products);
