import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Input, OnInit, NgModule, Inject } from '@angular/core';

@Component({
  selector: 'user-qrcode-dialog',
  templateUrl: './qrcode-dialog.component.html',
  styleUrls: ['./qrcode-dialog.component.scss'],
})
export class QrcodeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<QrcodeDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: IQRCodeDialogData) {}

  ngOnInit(): void {}

  public static openDialog(qrcode: IQRCodeDialogData, dialog: MatDialog) {
    dialog.open(QrcodeDialogComponent, {
      data: { qrcode: qrcode.qrcode },
      width: '80%',
      height: 'fit-content',
      maxWidth: '400px',
    });
  }
}

interface IQRCodeDialogData {
  qrcode: string;
}
