import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { AuthEffects } from './auth.effects';
import { LoadAuth, AuthLoaded } from './auth.actions';

import { Observable } from 'rxjs';

describe('AuthEffects', () => {
  let actions$: Observable<any>;
  let effects$: AuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        AuthEffects,
        DataPersistence,
        provideMockActions(() => actions$)
      ]
    });

    effects$ = TestBed.get(AuthEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions$ = hot('-a-|', { a: new LoadAuth({}) });
      expect(effects$.loadAuth$).toBeObservable(
        hot('-a-|', { a: new AuthLoaded({}) })
      );
    });
  });
});
