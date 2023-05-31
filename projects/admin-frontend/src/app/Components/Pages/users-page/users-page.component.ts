import { MatDialog } from '@angular/material/dialog';
import { UserDetailedDialogComponent } from './../../Dialogs/user-detailed-dialog/user-detailed-dialog.component';
import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import {AUserInforService} from 'AutomatApi';
@Component({
  selector: 'admin-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  rows:any = [];
  loadingIndicator = true;
  reorderable = true;

  columns = [{ name: 'Id' }, { name: 'Name' },{ name: 'Vorname' },{ name: 'Nachname' }, { name: 'Joined'},{name:"BorrowCount"},{name:"Blockiert"}];

  ColumnMode = ColumnMode

  constructor(private AUserInforService:AUserInforService, private MatDialog:MatDialog) {
    this.loadingIndicator = false;

  }
  ngOnInit(): void {
    this.load();
  }

  load(){
    this.AUserInforService.aUserInforGetAllUsersGet$Json().subscribe((data:any) => {
      this.rows = data;
    })
  }

  onRowClicki(event:any) {
    if(event.type == "click") {
      console.log(event.row)
      UserDetailedDialogComponent.openDialog(this.MatDialog,event.row.id).afterClosed().subscribe((data:any) => {
        this.load();
      });
    }
  }
}
