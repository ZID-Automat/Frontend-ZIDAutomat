import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeDataService } from 'AutomatShared';
import { UserFrontendRoutes } from '../../app-routing.module';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public UserFrontendRoutes:any = UserFrontendRoutes

  constructor(public themeDataService:ThemeDataService,private router:Router) { }

  ngOnInit(): void {
  }

  route(route:UserFrontendRoutes){
    this.router.navigate([route])
  }
}
