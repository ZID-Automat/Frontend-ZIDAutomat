import { ItemDisplayDto } from 'AutomatApi'
import { ThemeDataService } from 'AutomatShared';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ItemCardComponent } from './item-card/item-card.component';

@Component({
  selector: 'user-item-card-deck',
  templateUrl: './item-card-deck.component.html',
  styleUrls: ['./item-card-deck.component.scss']
})
export class ItemCardDeckComponent implements OnInit {

  @Input()Items?:ItemDisplayDto[] 

  @ViewChildren('ItemCards') ItemCards!: QueryList<ItemCardComponent>;
  
  PagePos:number = 0;
  PageSize:number = 3;

  FakeItems:any;

  contWidth = 0

  constructor(private ElementRef:ElementRef, public ThemeDataService:ThemeDataService) {
   }

  ngOnInit(): void {
   
  }

  calcStuff(scroll:boolean = false){
    let cardWidth = convertRemToPixels(25);
    let offset = convertRemToPixels(3.75*2);

    this.PageSize = Math.floor((this.ElementRef.nativeElement.offsetWidth-offset)/cardWidth)
    if(this.PageSize < 1){
      this.PageSize = 1; //Override for now, because else it would not even show on mobile.
    }
    this.contWidth = this.PageSize*cardWidth;

    this.FakeItems = new Array(this.PageSize);
    
    if(scroll){
      this.scroll(false);
    }
  }

  scroll(smooth:boolean = true){
    let dest = this.ItemCards.get((this.PagePos*this.PageSize));
    dest?.elementRef.nativeElement.scrollIntoView({behavior: (smooth?"smooth":"auto"),block:"nearest",inline:"start"});   
  }

  click(dir:number){
    this.PagePos += dir;
    if(this.PagePos < 0 || this.PagePos > Math.ceil(this.ItemCards.length/this.PageSize)){
      this.PagePos -= dir;
    }
    this.scroll()
  }
}

function convertRemToPixels(rem:number) {    
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}