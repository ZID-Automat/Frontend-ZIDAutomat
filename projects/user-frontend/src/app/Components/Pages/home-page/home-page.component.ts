import { ItemDataService } from './../../../Services/DataServices/itemData.service';
import { fromEvent, take, takeWhile } from 'rxjs';
import { UserService } from './../../../Services/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ItemDisplayDto} from 'AutomatApi'
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DetItemDialogData, ItemDetailedDialogComponent } from '../../Dialogs/item-detailed-dialog/item-detailed.dialog';
import { environment } from 'projects/user-frontend/src/environments/environment';

@Component({
  selector: 'user-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  AllItems: ItemDisplayDto[] = [];
  AllPrevItems: ItemDisplayDto[] = [];

  alive = true;

  private static SubState = true;

  constructor(private itemDataService: ItemDataService,private route: ActivatedRoute, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id']
      if(id && HomePageComponent.SubState){
         ItemDetailedDialogComponent.openSingleDialog(this.dialog,id)
      }
     this.changeSubState(false)
    });

    this.itemDataService
      .LoadAllItems()
      .pipe(take(1))
      .subscribe((res) => {
        this.AllItems = res;
      });

    this.itemDataService
      .LoadAllPrevItems()
      .pipe(take(1))
      .subscribe((res) => {
        this.AllPrevItems = res;
      });


      fromEvent(window, 'resize').pipe(takeWhile(()=>this.alive)).subscribe((event)=>{
        this.calcWhichView();
      });
      this.calcWhichView();
  }
  mobile = false
  public calcWhichView() {
    this.mobile = window.innerWidth <= environment.mobileSchwelle;
  }

  public changeSubState(state: boolean) {
    HomePageComponent.SubState = state;
  }


}
