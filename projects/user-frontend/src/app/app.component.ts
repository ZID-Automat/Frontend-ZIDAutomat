import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
  import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  title = 'UserFrontend';

  constructor(private router:Router){ }
}
