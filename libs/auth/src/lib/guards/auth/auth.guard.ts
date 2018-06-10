import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthState } from '@demo-app/auth/src';
import { Store, select } from '@ngrx/store';
​
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AuthState>) { }
​
  canActivate(
    next: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(select((state) => state.auth.user),
      map(user => {
        if (user) {
          return true;
        } else {
          this.router.navigate([`/auth/login`]);
          return false;
        }
      })
    );
  }
}
