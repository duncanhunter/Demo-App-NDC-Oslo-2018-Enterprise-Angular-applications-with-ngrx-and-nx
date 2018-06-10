import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  AuthActions,
  AuthActionTypes,
  LoadAuth,
  AuthLoaded
} from './auth.actions';
import { AuthState } from './auth.reducer';
import { DataPersistence } from '@nrwl/nx';

@Injectable()
export class AuthEffects {
  @Effect() effect$ = this.actions$.ofType(AuthActionTypes.AuthAction);

  @Effect()
  loadAuth$ = this.dataPersistence.fetch(AuthActionTypes.LoadAuth, {
    run: (action: LoadAuth, state: AuthState) => {
      return new AuthLoaded(state);
    },

    onError: (action: LoadAuth, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AuthState>
  ) {}
}
