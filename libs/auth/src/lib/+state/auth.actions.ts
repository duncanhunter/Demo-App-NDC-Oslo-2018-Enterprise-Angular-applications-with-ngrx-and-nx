import { Action } from '@ngrx/store';
import { Authenticate, User } from '@demo-app/data-models';

export enum AuthActionTypes {
  Login = '[Auth Page] Login',
  LoginSuccess = '[Auth API] Login Success',
  LoginFail = '[Auth API] Login Fail'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: Authenticate) {}
}
export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: User) {}
}

export class LoginFail implements Action {
  readonly type = AuthActionTypes.LoginFail;
  constructor(public payload: any) {}
}

export type AuthActions = Login | LoginSuccess | LoginFail;
