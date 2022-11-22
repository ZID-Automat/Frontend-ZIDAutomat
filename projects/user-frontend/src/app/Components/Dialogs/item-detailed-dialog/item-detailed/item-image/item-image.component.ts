import { Subject } from 'rxjs';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'user-item-image',
  templateUrl: './item-image.component.html',
  styleUrls: ['./item-image.component.scss']
})
export class ItemImageComponent implements OnInit {

  @Input()src:string | null | undefined= "";
  @Input()available:boolean = false
  @Input()alt:string = "";

  @ViewChild('image') image:any

  xMark: Subject<{width:number,height:number}> = new Subject();


  constructor() { }

  ngOnInit(): void {
  }

  load(){
    this.xMark.next({width:this.image.nativeElement.width,height:this.image.nativeElement.height})
  }
}
