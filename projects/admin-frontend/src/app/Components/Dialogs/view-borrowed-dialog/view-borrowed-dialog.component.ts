import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { BorrowedItem } from '../../Dummy/borrowed-view/borrowed-view.component';

@Component({
  selector: 'admin-view-borrowed-dialog',
  templateUrl: './view-borrowed-dialog.component.html',
  styleUrls: ['./view-borrowed-dialog.component.scss'],
})
export class ViewBorrowedDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ViewBorrowedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BorrowedItem
  ) {}

  ngOnInit(): void {}

  public static openDialog(dialog: MatDialog, borrowed: BorrowedItem) {
    dialog.open(ViewBorrowedDialogComponent, {
      data: borrowed,
      width: '80%',
      height: 'fit-content',
      maxWidth: '600px',
    });
  }
}
