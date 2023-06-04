import { QrCodeDataService } from './../../Services/DataServices/qrCodeData.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ThemeDataService } from 'AutomatShared';
import { UserFrontendRoutes } from '../../app-routing.module';
import { take } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

  public UserFrontendRoutes:any = UserFrontendRoutes

  count = 0
  alive = true

  constructor(public themeDataService:ThemeDataService,private router:Router, private qrCodeDataService:QrCodeDataService) { }
  ngOnDestroy(): void {
    this.alive = false

    this.router.events.subscribe(event => {
      console.log(event)
      if (event instanceof NavigationEnd) {
        console.log('URL changed:', event.url);
      }
    });
  }

  ngOnInit(): void {
    this.qrCodeDataService.activeQrCodesCount().pipe(take(1)).subscribe(res => this.count = res)
  }

  route(route:UserFrontendRoutes){
    this.router.navigate([route])
  }

  logout(){
    localStorage.removeItem('jwt')
    this.router.navigate([UserFrontendRoutes.Login])
  }
}
