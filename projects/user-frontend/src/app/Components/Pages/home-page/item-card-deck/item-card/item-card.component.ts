import { ThemeDataService } from 'AutomatShared';
import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ItemDisplayDto } from 'AutomatApi';
import { ItemService } from 'projects/user-frontend/src/app/Services/DataServices/item.service';

@Component({
  selector: 'user-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input()Item?:ItemDisplayDto ;

  constructor(public ThemeDataService:ThemeDataService, public elementRef:ElementRef) { }

  ngOnInit(): void {
  }

}
