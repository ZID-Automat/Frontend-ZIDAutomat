import { AItemService,ItemGetAllDto } from 'AutomatApi';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddItemDialogComponent } from '../../Dialogs/add-item-dialog/add-item-dialog.component';
import { ViewItemDialogComponent } from '../../Dialogs/view-item-dialog/view-item-dialog.component';
import { take } from 'rxjs';

@Component({
  selector: 'admin-item-man',
  templateUrl: './item-man.component.html',
  styleUrls: ['./item-man.component.scss'],
})
export class ItemManComponent implements OnInit {
  @Input() public GrapToPointsId: string[] = [];

  constructor(private matDialog: MatDialog, private AItemService:AItemService) {}

  data:ItemGetAllDto[] = []

  ngOnInit(): void {
    this.AItemService.aItemGetAllGet$Json().pipe(take(1)).subscribe((data) => {
      this.data = data;
      console.log(data)
    })
  }

  openAddItemDialog() {
    AddItemDialogComponent.openDialog(this.matDialog);
  }

  openViewItemDialog(item: any) {
    console.log(item);
    ViewItemDialogComponent.openDialog(this.matDialog);
  }

  dragi(ev:DragEvent) {
    ev.dataTransfer?.setData("text", (ev.target as any).id);
  }
}
