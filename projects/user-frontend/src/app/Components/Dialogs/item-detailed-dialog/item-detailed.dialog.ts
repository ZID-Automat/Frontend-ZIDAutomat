import { ItemDetailedDto } from 'AutomatApi';
import { ActivatedRoute } from '@angular/router';
import { ItemDataService } from './../../../Services/DataServices/itemData.service';
import { Component, Inject, OnInit } from '@angular/core';
import { switchMap, take } from 'rxjs/operators';
import { ThemeDataService } from 'AutomatShared';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'user-item-detailed-dialog',
  templateUrl: './item-detailed.dialog.html',
  styleUrls: ['./item-detailed.dialog.scss'],
})
export class ItemDetailedDialogComponent implements OnInit {
  item: ItemDetailedDto | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DetItemDialogData,
    private itemDataService: ItemDataService,
    public ThemeDataService: ThemeDataService
  ) {}

  ngOnInit(): void {
    this.load();
  }

  loadNextID(forward: boolean) {
    if(!this.bActive(forward)){
      return;
    }

    let dir = forward ? 1 : -1;
    this.data.index += dir ;
    this.load();
  }

  load() {
    let id = this.data.allIds[this.data.index]
    if(!(this.data.index  >= this.data.allIds.length || this.data.index < 0)){
      console.log(this.data.index)
      this.itemDataService
        .LoadItem(id)
        .pipe(take(1))
        .subscribe((res) => {
          this.item = res;
        });
    }
  }

  public static openDialog(MatDialog: MatDialog, indi: number, Items:any[]){
    MatDialog.open(ItemDetailedDialogComponent, {
      data:{index:indi,allIds:Items?.map(i=>i.id)},
      width:"80rem",
      height: "80vh",
    });
  }

  public static openSingleDialog(MatDialog: MatDialog, ItemId:number){
    MatDialog.open(ItemDetailedDialogComponent, {
      data:{index:0,allIds:[ItemId]},
      width:"80rem",
      height: "80vh",
    });
  }

  bActive(forward: boolean) :boolean{
    let dir = forward ? 1 : -1;
    return !(this.data.index +dir > this.data.allIds.length || this.data.index +dir < 0)
  }
}

 export interface DetItemDialogData {
  index: number;
  allIds: number[];
}
 