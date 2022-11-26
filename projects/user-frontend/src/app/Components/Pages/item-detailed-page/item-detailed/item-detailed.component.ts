import { Component, Input, OnInit } from '@angular/core';
import { ItemDetailedDto } from 'AutomatApi';

@Component({
  selector: 'user-item-detailed',
  templateUrl: './item-detailed.component.html',
  styleUrls: ['./item-detailed.component.scss']
})
export class ItemDetailedComponent implements OnInit {

  @Input()Item:ItemDetailedDto = {}

  constructor() { }

  ngOnInit(): void {
    
  }

  log(a:any) { console.log(a)}
}
