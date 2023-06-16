import { ItemChangeLocationDto, ItemLocationDto } from 'AutomatApi';
import { AItemService,ItemGetAllDto } from 'AutomatApi';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewItemDialogComponent } from '../../Dialogs/view-item-dialog/view-item-dialog.component';
import { take, Subject } from 'rxjs';

@Component({
  selector: 'admin-item-man',
  templateUrl: './item-man.component.html',
  styleUrls: ['./item-man.component.scss'],
})
export class ItemManComponent implements OnInit {
  @Input() public GrapToPointsId: string[] = [];

  constructor(private matDialog: MatDialog, private AItemService:AItemService) {}

  data:ItemGetAllDto[] = []
  @Output() public dataChange: EventEmitter<ItemGetAllDto[]> = new EventEmitter<ItemGetAllDto[]>();

  ngOnInit(): void {
   this.reload()
  }

  reload(){
    this.AItemService.aItemGetAllGet$Json().pipe(take(1)).subscribe((data) => {
      this.data = data;
      this.dataChange.emit(this.data);
    })
  }

  openAddItemDialog() {
   // AddItemDialogComponent.openDialog(this.matDialog);
   ViewItemDialogComponent.openDialog(this.matDialog, 0, true).afterClosed().pipe(take(1)).subscribe((data)=>{
      this.reload()
   });
    
  }

  openViewItemDialog(item: any) {
      ViewItemDialogComponent.openDialog(this.matDialog, item.id, false).afterClosed().pipe(take(1)).subscribe((data)=>{
        this.reload()
      })
  }

  dragi(ev:DragEvent) {
    console.log(ev.target   )
    const id = (ev.target as any).id;
    const data = this.data.find(e=>e.id == id);
    ev.dataTransfer?.setData("text", JSON.stringify(data));
  }



}
