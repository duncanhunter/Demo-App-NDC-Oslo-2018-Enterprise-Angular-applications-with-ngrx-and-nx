import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  AuthAction = '[Auth] Action',
  LoadAuth = '[Auth] Load Data',
  AuthLoaded = '[Auth] Data Loaded'
}

export class Auth implements Action {
  readonly type = AuthActionTypes.AuthAction;
}
export class LoadAuth implements Action {
  readonly type = AuthActionTypes.LoadAuth;
  constructor(public payload: any) {}
}

export class AuthLoaded implements Action {
  readonly type = AuthActionTypes.AuthLoaded;
  constructor(public payload: any) {}
}

export type AuthActions = Auth | LoadAuth | AuthLoaded;
