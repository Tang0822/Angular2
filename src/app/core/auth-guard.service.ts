import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, @Inject('auth') private authService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let url: string = state.url;
    return this.authService.getAuth()
      .map(auth => !auth.hasError);
  }

  canLoad(route: Route): Observable<boolean> {
    let url = `/${route.path}`;
    return this.authService.getAuth()
      .map(auth => !auth.hasError);
  }
}
