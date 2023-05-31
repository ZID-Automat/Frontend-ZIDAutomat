import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddItemDialogComponent } from '../../Dialogs/add-item-dialog/add-item-dialog.component';
import { ViewItemDialogComponent } from '../../Dialogs/view-item-dialog/view-item-dialog.component';

@Component({
  selector: 'admin-item-man',
  templateUrl: './item-man.component.html',
  styleUrls: ['./item-man.component.scss'],
})
export class ItemManComponent implements OnInit {
  public h = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 18];
  @Input() public GrapToPointsId: string[] = [];

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

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
