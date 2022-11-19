import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserFrontendRoutes } from '../app-routing.module';

@Injectable({
  providedIn: 'root',
})
export class LoginActivateGuard implements CanActivate {
  constructor(private jwtHelperService: JwtHelperService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if(this.jwtHelperService.isTokenExpired())
      this.router.navigate([UserFrontendRoutes.Login]);
    return !this.jwtHelperService.isTokenExpired();
  }
}
