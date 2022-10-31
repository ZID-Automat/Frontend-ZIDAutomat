import {
  Item,
  ItemService,
} from 'projects/user-frontend/src/app/Services/DataServices/item.service';
import { take } from 'rxjs';
import { UserService } from './../../../Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  Items: Item[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService
      .LoadItems()
      .pipe(take(1))
      .subscribe((res) => {
        this.Items = res;
        console.log(res)
      });
  }
}
