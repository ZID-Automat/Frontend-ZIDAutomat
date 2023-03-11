import { ThemeDataService } from './../../../../../../automat-shared/src/lib/Services/DataServices/theme-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public themeDataService:ThemeDataService) { }

  ngOnInit(): void {
  }

}
