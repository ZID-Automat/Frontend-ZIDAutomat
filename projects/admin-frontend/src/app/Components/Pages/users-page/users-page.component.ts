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

  columns = [{ name: 'Id' }, { name: 'Name' },{ name: 'Vorname' },{ name: 'Nachname' }, { name: 'Joined'},{name:"BorrowCount"}];

  ColumnMode = ColumnMode

  constructor(private AUserInforService:AUserInforService) {
    this.loadingIndicator = false;

  }
  ngOnInit(): void {
    this.AUserInforService.aUserInforUserGet$Json().subscribe(x=>{
      console.log(x);
      this.rows = x;
    });
  }
}
