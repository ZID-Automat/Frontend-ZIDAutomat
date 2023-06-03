import { ThemeDataService } from './../../../../../../automat-shared/src/lib/Services/DataServices/theme-data.service';
import { Component, OnInit } from '@angular/core';
import { AdminFrontendRoutes } from '../../../app-routing.module';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  public adminFrontendRoutes = AdminFrontendRoutes;

  constructor(
    public themeDataService: ThemeDataService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('jwt');
    //Redirect to login
    this.router.navigate([AdminFrontendRoutes.Login]);
  }
}
