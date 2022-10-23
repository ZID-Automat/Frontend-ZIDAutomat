import { take } from 'rxjs';
import { UserService } from './../../../Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  test(){
    this.userService.borrow().pipe(take(1)).subscribe(res=>{
      console.log(res)
    });
  }

}
