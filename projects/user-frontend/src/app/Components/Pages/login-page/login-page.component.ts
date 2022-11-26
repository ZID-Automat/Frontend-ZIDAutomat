import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserFrontendRoutes } from '../../../app-routing.module';

@Component({
  selector: 'user-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  public Login(jwt: string) {
    if (jwt) {
      //Check if there is a return url in the query params
      const previousNavigation =
        this.router.getCurrentNavigation()?.previousNavigation;
      if (previousNavigation != null && previousNavigation != undefined)
        this.router.navigate([previousNavigation]);
      else this.router.navigate([UserFrontendRoutes.Home]);
    }
  }
}
