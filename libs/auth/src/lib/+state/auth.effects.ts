import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes } from './auth.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from './../services/auth/auth.service';
import * as authActions from './auth.actions';
import { User } from '@demo-app/data-models';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    mergeMap((action: authActions.Login) =>
      this.authService
        .login(action.payload)
        .pipe(
          map((user: User) => new authActions.LoginSuccess(user)),
          catchError(error => of(new authActions.LoginFail(error)))
        )
    )
  );

  @Effect({ dispatch: false })
  navigateToProfile$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    map((action: authActions.LoginSuccess) => action.payload),
    tap(() => this.router.navigate([`/products`]))
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
