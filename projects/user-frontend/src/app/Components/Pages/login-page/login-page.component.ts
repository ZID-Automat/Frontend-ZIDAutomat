import { Component, OnInit } from '@angular/core';
import { ThemeDataService } from 'AutomatShared';
import { take } from 'rxjs';

@Component({
  selector: 'user-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(public themeDataService:ThemeDataService) { }

  ngOnInit(): void {
  }
}
