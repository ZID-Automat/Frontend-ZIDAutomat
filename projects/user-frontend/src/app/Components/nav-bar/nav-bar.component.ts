import { QrCodeDataService } from './../../Services/DataServices/qrCodeData.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeDataService } from 'AutomatShared';
import { UserFrontendRoutes } from '../../app-routing.module';
import { take } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public UserFrontendRoutes:any = UserFrontendRoutes

  count = 0

  constructor(public themeDataService:ThemeDataService,private router:Router, private qrCodeDataService:QrCodeDataService) { }

  ngOnInit(): void {
    this.qrCodeDataService.activeQrCodesCount().pipe(take(1)).subscribe(res => this.count = res)
  }

  route(route:UserFrontendRoutes){
    this.router.navigate([route])
  }
}
