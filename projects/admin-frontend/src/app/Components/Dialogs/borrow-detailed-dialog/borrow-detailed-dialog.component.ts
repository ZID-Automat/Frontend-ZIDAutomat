import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColumnMode } from '@swimlane/ngx-datatable';

import { ABorrowInfoService } from 'AutomatApi';
import { take } from 'rxjs';

@Component({
  selector: 'admin-borrow-detailed-dialog',
  templateUrl: './borrow-detailed-dialog.component.html',
  styleUrls: ['./borrow-detailed-dialog.component.scss'],
})
export class BorrowDetailedDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ABorrowInfoService: ABorrowInfoService
  ) {}

  public ColumnMode = ColumnMode;

  public DateRows: any;
  public ItemRows: any;
  public BorrowData:any

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

  public static openDialog(dialog: MatDialog, id: number) {
    dialog.open(BorrowDetailedDialogComponent, {
      data: { id: id },
      width: '40%',
      height: '78vh',
    });
  }
}
