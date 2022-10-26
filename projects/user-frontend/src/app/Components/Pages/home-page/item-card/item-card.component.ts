import { ThemeDataService } from './../../../../../../../automat-shared/src/lib/Services/DataServices/theme-data.service';
import { Component, Input, OnInit } from '@angular/core';
import { Item, ItemService } from 'projects/user-frontend/src/app/Services/DataServices/item.service';

@Component({
  selector: 'user-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input()Item?:Item ;

  constructor(public ThemeDataService:ThemeDataService) { }

  ngOnInit(): void {
  }

}
