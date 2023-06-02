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

  qrcode:string = this.data.qrcode;
  qrcodeWidth:number|null = null
  @ViewChild('QrCode') qrCodeElement: ElementRef<HTMLDivElement> = null!

  ngAfterViewInit(): void {
    this.qrcodeWidth = this.qrCodeElement.nativeElement.offsetWidth;
    fromEvent(window, 'resize').subscribe((el) => {
        this.qrcodeWidth = this.qrCodeElement.nativeElement.offsetWidth;
    });
  }


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
