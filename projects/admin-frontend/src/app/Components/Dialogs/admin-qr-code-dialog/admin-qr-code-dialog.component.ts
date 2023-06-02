import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'admin-admin-qr-code-dialog',
  templateUrl: './admin-qr-code-dialog.component.html',
  styleUrls: ['./admin-qr-code-dialog.component.scss']
})
export class AdminQrCodeDialogComponent implements OnInit , AfterViewInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  ngAfterViewInit(): void {
    fromEvent(window, 'resize').subscribe((el) => {
      console.log(this.qrCodeElement.nativeElement.innerWidth)
    });
  }

  qrcode:string = this.data.qrcode;

  qrCodeWidth = 0;
  @ViewChild('qrCode') qrCodeElement: ElementRef = null!

  ngOnInit(): void {
    
  }

  public static openDialog(dialog: MatDialog, qrcode:string): MatDialogRef<AdminQrCodeDialogComponent> {
    return dialog.open(AdminQrCodeDialogComponent, {
      data: { qrcode:qrcode},
      width: '40vh',
      height: '40vh',
    });
  }

}
