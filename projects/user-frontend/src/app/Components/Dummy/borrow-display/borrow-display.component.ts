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
    let date = new Date(this.borrow.borrowDate??"")
    date.setHours(date.getHours()+1)
    QrcodeDialogComponent.openDialog({qrcode:this.borrow.guid??"", duetime:date},this.matDialog);
  }

  openZumArtikel(){
    ItemDetailedDialogComponent.openSingleDialog(this.matDialog,this.borrow.itemId??-1)
  }
}
