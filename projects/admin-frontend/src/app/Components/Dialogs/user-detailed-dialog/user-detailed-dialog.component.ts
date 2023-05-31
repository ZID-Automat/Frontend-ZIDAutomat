import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColumnMode } from '@swimlane/ngx-datatable';
import {AUserInforService,UserAdminDetailedDto} from 'AutomatApi';
@Component({
  selector: 'admin-user-detailed-dialog',
  templateUrl: './user-detailed-dialog.component.html',
  styleUrls: ['./user-detailed-dialog.component.scss']
})
export class UserDetailedDialogComponent implements OnInit {

  public user:UserAdminDetailedDto = null!
  public ColumnMode = ColumnMode

  constructor(private AUserInforService:AUserInforService,public dialogRef: MatDialogRef<UserDetailedDialogComponent> , @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    this.AUserInforService.aUserInforDetailedUserGet$Json({id:this.data.id}).subscribe((data) => {
      this.user = data;
    })
  }
  
  public static openDialog(dialog: MatDialog, id:number) {
    dialog.open(UserDetailedDialogComponent, {
       data: { id: id },
      width: '70%',
      height: '80vh',
    });
  }

  columns = [{ name: 'Id' }, { name: 'BorrowDate' },{ name: 'Returned' },{ name: 'Itemname' }];
}
