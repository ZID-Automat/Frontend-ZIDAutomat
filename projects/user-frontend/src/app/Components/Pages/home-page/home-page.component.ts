import { ItemDataService } from './../../../Services/DataServices/itemData.service';
import { take } from 'rxjs';
import { UserService } from './../../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import {ItemDisplayDto} from 'AutomatApi'

@Component({
  selector: 'user-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  AllItems: ItemDisplayDto[] = [];
  AllPrevItems: ItemDisplayDto[] = [];

  constructor(private itemDataService: ItemDataService) {}

  ngOnInit(): void {
    this.itemDataService
      .LoadAllItems()
      .pipe(take(1))
      .subscribe((res) => {
        this.AllItems = res;
      });

    this.itemDataService
      .LoadAllPrevItems()
      .pipe(take(1))
      .subscribe((res) => {
        this.AllPrevItems = res;
      });
  }
}
