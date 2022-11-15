import { Router } from '@angular/router';
import { ThemeDataService } from 'AutomatShared';
import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ItemDisplayDto } from 'AutomatApi';

@Component({
  selector: 'user-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input()Item?:ItemDisplayDto ;

  constructor(public ThemeDataService:ThemeDataService, public elementRef:ElementRef, private router:Router) { }

  ngOnInit(): void {
  }

  click(){
  }
}
