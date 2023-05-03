import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BorrowedItem } from '../../Dummy/borrowed-view/borrowed-view.component';

@Component({
  selector: 'admin-view-borrowed-dialog',
  templateUrl: './view-borrowed-dialog.component.html',
  styleUrls: ['./view-borrowed-dialog.component.scss'],
})
export class ViewBorrowedDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ViewBorrowedDialogComponent>) {}

  ngOnInit(): void {}

  public static openDialog(dialog: MatDialog, borrowed: BorrowedItem) {
    dialog.open(ViewBorrowedDialogComponent, {
      // data: { qrcode: qrcode.qrcode },
      width: '80%',
      height: 'fit-content',
      maxWidth: '600px',
    });
  }
}
