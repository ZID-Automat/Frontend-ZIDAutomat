import { BorrowDetailedDialogComponent } from './../borrow-detailed-dialog/borrow-detailed-dialog.component';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { AUserInforService, BlockiertStateDto, UserAdminDetailedDto } from 'AutomatApi';
@Component({
  selector: 'admin-user-detailed-dialog',
  templateUrl: './user-detailed-dialog.component.html',
  styleUrls: ['./user-detailed-dialog.component.scss'],
})
export class UserDetailedDialogComponent implements OnInit {
  public user: UserAdminDetailedDto = null!;
  public ColumnMode = ColumnMode;
  constructor(
    private AUserInforService: AUserInforService,
    public dialogRef: MatDialogRef<UserDetailedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.AUserInforService.aUserInforDetailedUserGet$Json({
      id: this.data.id,
    }).subscribe((data) => {
      this.user = data;
    });
  }

  public static openDialog(dialog: MatDialog, id: number) :MatDialogRef<UserDetailedDialogComponent>{
    return dialog.open(UserDetailedDialogComponent, {
      data: { id: id },
      width: '70%',
      height: '85vh',
    })
  }

  public getRowClass(row: any) {
    let stat =row.stati
    if(stat == 0){
      return 'borrowNotReturned';
    }
    if(stat == 2){
      return 'borrowReturned';
    }
    return "";
  }

  public onRowClick(event: any) {
    if (event.type == 'click') {
      console.log("jaja");
      BorrowDetailedDialogComponent.openDialog(this.dialog, event.row.id)
    }
  }

  columns = [
    { name: 'Id' },
    { name: 'Itemname' },
    { name: 'BorrowDate' },
  ];

  public Blockieren() {
    let should = !this.user.blockiert;

    let body:BlockiertStateDto = {
      id: this.user.id,
      blockiert: should
    }

    this.AUserInforService.aUserInforSetBlockiertPost(
      {body: body}).subscribe(() => {
      this.user .blockiert = should;
    });
  }
}
