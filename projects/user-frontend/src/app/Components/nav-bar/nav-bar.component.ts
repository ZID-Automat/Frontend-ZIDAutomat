import { Component, OnInit } from '@angular/core';
import { ThemeDataService } from 'AutomatShared';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private themeDataService:ThemeDataService) { }

  ngOnInit(): void {
  }

}
