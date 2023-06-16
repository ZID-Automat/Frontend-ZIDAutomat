import { ViewItemDialogComponent } from './../view-item-dialog/view-item-dialog.component';
import { UserDetailedDialogComponent } from './../user-detailed-dialog/user-detailed-dialog.component';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ColumnMode } from '@swimlane/ngx-datatable';

import { take } from 'rxjs';
import { AdminQrCodeDialogComponent } from '../admin-qr-code-dialog/admin-qr-code-dialog.component';
import { ABorrowInfoService, BorrowAdminDetailedDto } from 'AutomatApi';

@Component({
  selector: 'admin-borrow-detailed-dialog',
  templateUrl: './borrow-detailed-dialog.component.html',
  styleUrls: ['./borrow-detailed-dialog.component.scss'],
})
export class BorrowDetailedDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ABorrowInfoService: ABorrowInfoService,
    private MatDialog: MatDialog
  ) {}

  public ShowToUser: boolean = true;
  public ColumnMode = ColumnMode;

  public DateRows: any;
  public ItemRows: any;
  public ShowToItem: boolean = true;
  public BorrowData: BorrowAdminDetailedDto = undefined!;

  public DateCollums: any = [
    {
      prop: 'date',
    },
    {
      prop: 'value',
    },
  ];

  ngOnInit(): void {
    this.ShowToUser = this.data.ShowToUser;
    this.ShowToItem = this.data.ShowToItem;
    this.ABorrowInfoService.aBorrowInfoBorrowDetailedGet$Json({
      id: this.data.id,
    })
      .pipe(take(1))
      .subscribe((data) => {
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
          },
          {
            date: 'ItemInstanceId',
            value: data.itemInstanceId,
          },
        ];

        this.BorrowData = data;
      });
  }

  public static openDialog(
    dialog: MatDialog,
    id: number,
    ShowToUser: boolean = true,
    ShowToItem: boolean = true
  ): MatDialogRef<BorrowDetailedDialogComponent> {
    return dialog.open(BorrowDetailedDialogComponent, {
      data: { id: id, ShowToUser: ShowToUser, ShowToItem: ShowToItem },
      width: '40%',
      height: '78vh',
    });
  }

  public ZumUser(Event: any) {
    UserDetailedDialogComponent.openDialog(
      this.MatDialog,
      this.BorrowData?.userId ?? -1
    );
  }

  public Zurueckgeben() {
    this.ABorrowInfoService.aBorrowInfoZurueckgebenPost$Json({
      body: {
        id: this.BorrowData.id,
        value: this.BorrowData.returnDate == null,
      },
    })
      .pipe(take(1))
      .subscribe((data: any) => {
        this.BorrowData.returnDate = data;
      });
  }

  public ShowQrCode() {
    AdminQrCodeDialogComponent.openDialog(
      this.MatDialog,
      this.BorrowData.guid!
    );
  }

  public Entschuldigen() {
    let state = !this.BorrowData.entschuldigt;
    this.ABorrowInfoService.aBorrowInfoEntschuldigtPost({
      body: {
        id: this.BorrowData.id,
        value: state,
      },
    })
      .pipe(take(1))
      .subscribe(() => {
        this.BorrowData.entschuldigt = state;
      });
  }

  public ShowItemDia() {
    ViewItemDialogComponent.openDialog(
      this.MatDialog,
      this.BorrowData.itemId!,
      false
    );
  }
}
