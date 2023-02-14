import { ItemDetailedDialogComponent } from './../../Dialogs/item-detailed-dialog/item-detailed.dialog';
import { MatDialog } from '@angular/material/dialog';
import { QrcodeDialogComponent } from './../../Dialogs/qrcode-dialog/qrcode-dialog.component';
import { Component, Input, OnInit } from '@angular/core';
import { BorrowDto } from 'AutomatApi';

@Component({
  selector: 'user-borrow-display',
  templateUrl: './borrow-display.component.html',
  styleUrls: ['./borrow-display.component.scss']
})
export class BorrowDisplayComponent implements OnInit {

  @Input() borrow:BorrowDto = undefined!;

  constructor(private matDialog:MatDialog) { }

  ngOnInit(): void {
    
  }

  openQrCodeDialog(){
    QrcodeDialogComponent.openDialog({qrcode:this.borrow.uuid??""},this.matDialog);
  }

  openZumArtikel(){
    ItemDetailedDialogComponent.openSingleDialog(this.matDialog,this.borrow.itemId??-1)
  }
}
