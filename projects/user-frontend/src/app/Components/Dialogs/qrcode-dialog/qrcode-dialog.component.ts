import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Input, OnInit, NgModule, Inject } from '@angular/core';
import { min, take } from 'rxjs';

@Component({
  selector: 'user-qrcode-dialog',
  templateUrl: './qrcode-dialog.component.html',
  styleUrls: ['./qrcode-dialog.component.scss'],
})
export class QrcodeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<QrcodeDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: IQRCodeDialogData) {}

  countdown:string = "";
  danger: boolean = false

  ngOnInit(): void {
        const timer = () => {
          const date = new Date()
          if(this.data.duetime && date > this.data.duetime){
            this.dialogRef.close();
          }
          const diff = (this.data.duetime!.getTime() - date.getTime())/1000;

          const minutes = Math.floor(diff / 60);
          const remainingSeconds = Math.round(diff % 60);
      
          const formattedMinutes = minutes.toString().padStart(2, '0');
          const formattedSeconds = remainingSeconds.toString().padStart(2, '0');
          this.countdown = `${formattedMinutes}:${formattedSeconds}`;

          if(minutes<10){
            this.danger = true;
          }
        }
        timer();
      const id = setInterval(timer,1000) 
      this.dialogRef.afterClosed().pipe(take(1)).subscribe(res=>clearInterval(id));
  }

  public static openDialog(qrcode: IQRCodeDialogData, dialog: MatDialog) {
    dialog.open(QrcodeDialogComponent, {
      data: qrcode,
      width: '80%',
      height: 'fit-content',
      maxWidth: '400px',
    });
  }
}

interface IQRCodeDialogData {
  qrcode: string;
  duetime?: Date;
}
