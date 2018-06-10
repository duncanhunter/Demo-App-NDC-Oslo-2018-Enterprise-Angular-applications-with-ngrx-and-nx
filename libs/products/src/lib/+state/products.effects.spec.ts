import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { ProductsEffects } from './products.effects';
import { LoadProductsSuccess, LoadProductsFail } from './products.actions';

import { Observable } from 'rxjs';

describe('ProductsEffects', () => {
  let actions$: Observable<any>;
  let effects$: ProductsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        ProductsEffects,
        DataPersistence,
        provideMockActions(() => actions$)
      ]
    });

    effects$ = TestBed.get(ProductsEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions$ = hot('-a-|', { a: new LoadProductsSuccess({}) });
      expect(effects$.loadProducts$).toBeObservable(
        hot('-a-|', { a: new LoadProductsFail({}) })
      );
    });
  });
});
