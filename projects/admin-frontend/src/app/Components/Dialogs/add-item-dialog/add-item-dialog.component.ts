import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'admin-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.scss'],
})
export class AddItemDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddItemDialogComponent> // @Inject(MAT_DIALOG_DATA) public data: IAddItemDialogData
  ) {}

  ngOnInit(): void {}

  public static openDialog(dialog: MatDialog) {
    dialog.open(AddItemDialogComponent, {
      // data: { qrcode: qrcode.qrcode },
      width: '80%',
      height: 'fit-content',
      maxWidth: '400px',
    });
  }
}

// interface IAddItemDialogData {
//   name: string;
// }
