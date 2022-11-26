import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeDataService } from 'AutomatShared';
import { UserFrontendRoutes } from '../../../app-routing.module';

@Component({
  selector: 'user-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    public themeDataService: ThemeDataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public Login(jwt: string) {
    if (jwt) {
      //Check if there is a return url in the query params
      const returnUrl = this.router.parseUrl(this.router.url).queryParams[
        'returnUrl'
      ];
      if (returnUrl) {
        this.router.navigateByUrl(returnUrl);
      } else this.router.navigate([UserFrontendRoutes.Home]);
    }
  }
}
