import { ItemDataService } from './../../../Services/DataServices/itemData.service';
import { take } from 'rxjs';
import { UserService } from './../../../Services/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ItemDisplayDto} from 'AutomatApi'
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DetItemDialogData, ItemDetailedDialogComponent } from '../../Dialogs/item-detailed-dialog/item-detailed.dialog';

@Component({
  selector: 'user-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  AllItems: ItemDisplayDto[] = [];
  AllPrevItems: ItemDisplayDto[] = [];

  private SubState = true;

  constructor(private itemDataService: ItemDataService,private route: ActivatedRoute, public dialog: MatDialog) {}

  ngOnInit(): void {


    this.route.params.subscribe(params => {
      let id = params['id']
      if(id && this.SubState){
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
  }

  public changeSubState(state: boolean) {
    this.SubState = state;
  }
}
