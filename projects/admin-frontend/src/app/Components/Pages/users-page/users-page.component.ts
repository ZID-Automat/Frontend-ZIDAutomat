import { MatDialog } from '@angular/material/dialog';
import { UserDetailedDialogComponent } from './../../Dialogs/user-detailed-dialog/user-detailed-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import {AUserInforService} from 'AutomatApi';
import { take } from 'rxjs';
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

  }
  ngOnInit(): void {
    this.load();
  }

  load(){
    this.AUserInforService.aUserInforGetAllUsersGet$Json().pipe(take(1)).subscribe((data:any) => {
      this.rows = data;
      this.loadingIndicator = false;
    })
  }

  onRowClicki(event:any) {
    if(event.type == "click") {
      console.log(event.row)
      UserDetailedDialogComponent.openDialog(this.MatDialog,event.row.id).afterClosed().pipe(take(1)).subscribe((data:any) => {
        this.load();
      });
    }
  }

  private safe:any
  
  @ViewChild('Idiii2') id: any;
  @ViewChild('Nameiii2') name: any;

  public filtering(){
    const id = this.id.nativeElement.value;
    const name = this.name.nativeElement.value;

    if(!this.safe){
      this.safe = this.rows;
    } 
    this.rows = this.safe.filter((x:any) => {
      if(id && name){
        return x.id == id && x.name.toLowerCase().includes(name.toLowerCase());
      }
      else if(id){
        return x.id == id;
      }
      else if(name){
        return x.name.toLowerCase().includes(name.toLowerCase());
      }else{
        return true;
      }
    })
  }
}
