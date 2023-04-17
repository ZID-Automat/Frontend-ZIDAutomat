import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'admin-view-item-dialog',
  templateUrl: './view-item-dialog.component.html',
  styleUrls: ['./view-item-dialog.component.scss'],
})
export class ViewItemDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ViewItemDialogComponent> // @Inject(MAT_DIALOG_DATA) public data: IAddItemDialogData
  ) {}

  ngOnInit(): void {}

  public static openDialog(dialog: MatDialog) {
    dialog.open(ViewItemDialogComponent, {
      // data: { qrcode: qrcode.qrcode },
      width: '80%',
      height: 'fit-content',
      maxWidth: '600px',
    });
  }

  public updateItem() {
    alert('Item updated');
  }

  public deleteItem() {
    alert('Item deleted');
  }
}

// interface IAddItemDialogData {
//   name: string;
// }
