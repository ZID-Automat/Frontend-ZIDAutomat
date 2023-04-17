import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AdminFrontendRoutes } from '../app-routing.module';

@Injectable({
  providedIn: 'root',
})
export class LoginDeactivateGuard implements CanActivate {
  constructor(private jwtHelperService: JwtHelperService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const tokenValid = !this.jwtHelperService.isTokenExpired();
    if(tokenValid){
      this.router.navigate([AdminFrontendRoutes.Item]);
    }
    return !tokenValid;
  }
}
