import { BorrowDetailedDialogComponent } from './../borrow-detailed-dialog/borrow-detailed-dialog.component';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { AUserInforService, BlockiertStateDto, UserAdminDetailedDto } from 'AutomatApi';
import { take } from 'rxjs';
@Component({
  selector: 'admin-user-detailed-dialog',
  templateUrl: './user-detailed-dialog.component.html',
  styleUrls: ['./user-detailed-dialog.component.scss'],
})
export class UserDetailedDialogComponent implements OnInit {
  public user: UserAdminDetailedDto = null!;
  constructor(
    private AUserInforService: AUserInforService,
    public dialogRef: MatDialogRef<UserDetailedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.AUserInforService.aUserInforDetailedUserGet$Json({
      id: this.data.id,
    }).pipe(take(1)).subscribe((data) => {
      this.user = data;
    });
  }

  public static openDialog(dialog: MatDialog, id: number) :MatDialogRef<UserDetailedDialogComponent>{
    return dialog.open(UserDetailedDialogComponent, {
      data: { id: id },
      width: '80%',
      height: '85vh',
    })
  }

  public Blockieren() {
    let should = !this.user.blockiert;

    let body:BlockiertStateDto = {
      id: this.user.id,
      blockiert: should
    }

    this.AUserInforService.aUserInforSetBlockiertPost(
      {body: body}).pipe(take(1)).subscribe(() => {
      this.user .blockiert = should;
    });
  }
}
