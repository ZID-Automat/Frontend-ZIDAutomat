import { MatDialog } from '@angular/material/dialog';
import { BorrowDetailedDialogComponent } from './../../Dialogs/borrow-detailed-dialog/borrow-detailed-dialog.component';
import { Component, Input, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { LogQrCodeAdminDto } from 'AutomatApi';

@Component({
  selector: 'admin-automat-qr-code-log',
  templateUrl: './automat-qr-code-log.component.html',
  styleUrls: ['./automat-qr-code-log.component.scss']
})
export class AutomatQrCodeLogComponent implements OnInit {

  @Input() AdmiLog:LogQrCodeAdminDto[] = [];
  public ColumnMode = ColumnMode;


  constructor(private MatDialog:MatDialog) { }

  ngOnInit(): void {
  }

  showBorrow(value:number){
    BorrowDetailedDialogComponent.openDialog(this.MatDialog,value,true,true)
  }
}
