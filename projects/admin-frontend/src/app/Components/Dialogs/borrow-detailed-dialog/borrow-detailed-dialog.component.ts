import { UserDetailedDialogComponent } from './../user-detailed-dialog/user-detailed-dialog.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColumnMode } from '@swimlane/ngx-datatable';

import { ABorrowInfoService, BorrowAdminDetailedDto } from 'AutomatApi';
import { take } from 'rxjs';
import { AdminQrCodeDialogComponent } from '../admin-qr-code-dialog/admin-qr-code-dialog.component';

@Component({
  selector: 'admin-borrow-detailed-dialog',
  templateUrl: './borrow-detailed-dialog.component.html',
  styleUrls: ['./borrow-detailed-dialog.component.scss'],
})
export class BorrowDetailedDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ABorrowInfoService: ABorrowInfoService,
    private MatDialog:MatDialog
  ) {}

  public ColumnMode = ColumnMode;

  public DateRows: any;
  public ItemRows: any;
  public BorrowData:BorrowAdminDetailedDto = undefined!;

  public DateCollums: any = [
    {
      prop: 'date',
    },
    {
      prop: 'value',
    },
  ]

  ngOnInit(): void {
    this.ABorrowInfoService.borrowDetailedGet$Json({
      id: this.data.id,
    }).pipe(take(1)).subscribe((data) => {
      this.DateRows = [
        {
          date: 'BorrowDate',
          value: data.borrowDate,
        },
        {
          date: 'ReturnDate',
          value: data.returnDate,
        },
        {
          date: 'PredictedReturnDate',
          value: data.predictedReturnDate,
        },
        {
          date: 'CollectDate',
          value: data.collectDate,
        },
      ];

      this.ItemRows = [
        {
          date: 'ItemName',
          value: data.name,
        },
        {
          date: 'SubName',
          value: data.subName,
        },
        {
          date: 'ItemId',
          value: data.itemId,
        },{
          date: 'ItemInstanceId',
          value: data.itemInstanceId,
        }
      ]

      this.BorrowData = data
    });
  }

  public static openDialog(dialog: MatDialog, id: number,ShowToUser:boolean = true,): MatDialogRef<BorrowDetailedDialogComponent> {
    return dialog.open(BorrowDetailedDialogComponent, {
      data: { id: id , ShowToUser:ShowToUser},
      width: '40%',
      height: '78vh',
    });
  }

  public ZumUser(Event:any){
    UserDetailedDialogComponent.openDialog(this.MatDialog, this.BorrowData?.userId ??-1)
  }

  public Zurueckgeben(){
    this.ABorrowInfoService.zurueckgebenPost$Json({
      Id: this.BorrowData.id,
      Value: this.BorrowData.returnDate == null
    }).pipe(take(1)).subscribe((data: any) => {
      this.BorrowData.returnDate = data
    })
  }

  public ShowQrCode(){
    AdminQrCodeDialogComponent.openDialog(this.MatDialog, this.BorrowData.guid!)
  }

  public Entschuldigen(){
    let state = !this.BorrowData.entschuldigt;
    this.ABorrowInfoService.entschuldigtPost({
      Id: this.BorrowData.id,
      Value: state
    }).pipe(take(1)).subscribe(() => {
      this.BorrowData.entschuldigt = state
    })
  }
}
