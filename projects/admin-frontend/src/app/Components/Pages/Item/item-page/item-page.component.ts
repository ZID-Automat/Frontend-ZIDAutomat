import { Subject } from 'rxjs';
import { ItemManComponent } from './../../../Dummy/item-man/item-man.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemGetAllDto } from 'AutomatApi';

@Component({
  selector: 'admin-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {

  @ViewChild("ItemMan") automatView:ItemManComponent = null!;

  public Datas:Subject<ItemGetAllDto[]> = new Subject<ItemGetAllDto[]>();
  constructor() { }

  ngOnInit(): void {
  }

  onDropAutomatView(data:{Location:string,ItemId:number}){
    this.automatView.data.find(e=>e.id == data.ItemId)!.locationImAutomat = data.Location;
  }

  onDataLoad(data:ItemGetAllDto[]){
    this.Datas.next(data);
  }

  reaLoad(){
    this.automatView.reload();
  }
}
