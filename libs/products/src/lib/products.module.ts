import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './containers/products/products.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productsReducer, initialState as productsInitialState } from './+state/products.reducer';
import { ProductsEffects } from './+state/products.effects';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MaterialModule } from '@demo-app/material';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', component: ProductsComponent }
    ]),
    StoreModule.forFeature('products', productsReducer, { initialState: productsInitialState }),
    EffectsModule.forFeature([ProductsEffects])
  ],
  declarations: [ProductsComponent, ProductListComponent],
  providers: [ProductsEffects]
})
export class ProductsModule {}
