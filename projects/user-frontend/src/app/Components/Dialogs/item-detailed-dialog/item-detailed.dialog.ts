import { ItemDetailedDto } from 'AutomatApi';
import { ActivatedRoute } from '@angular/router';
import { ItemDataService } from './../../../Services/DataServices/itemData.service';
import { Component, Inject, OnInit, EventEmitter } from '@angular/core';
import { switchMap, take } from 'rxjs/operators';
import { ThemeDataService } from 'AutomatShared';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'projects/user-frontend/src/environments/environment';

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
    public ThemeDataService: ThemeDataService,
    private MatDialogRef : MatDialogRef<ItemDetailedDialogComponent>
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
  public static openDialog(MatDialog: MatDialog, indi: number, Items:number[]):MatDialogRef<ItemDetailedDialogComponent>{
    let mobile = window.innerWidth <= environment.mobileSchwelle;

    const ref = MatDialog.open(ItemDetailedDialogComponent, {
      data:{index:indi,allIds:Items},
      width:mobile?"100%":"80rem",
      height: mobile?"100vh":"80vh",
      maxWidth: mobile?'100%' : '80rem',
    });
    return ref;
  }

  public static openSingleDialog(MatDialog: MatDialog, ItemId:number):MatDialogRef<ItemDetailedDialogComponent>{
    return this.openDialog(MatDialog,0,[ItemId])
  }

  bActive(forward: boolean) :boolean{
    let dir = forward ? 1 : -1;
    return !(this.data.index +dir > (this.data.allIds.length-1) || this.data.index +dir < 0)
  }

  close(){
    this.MatDialogRef.close();
  }
}

 export interface DetItemDialogData {
  index: number;
  allIds: number[];
  ClosedEvent:EventEmitter<void>
}
 