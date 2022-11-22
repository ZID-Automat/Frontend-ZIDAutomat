import { ItemDetailedDto } from 'AutomatApi';
import { ActivatedRoute } from '@angular/router';
import { ItemDataService } from './../../../Services/DataServices/itemData.service';
import { Component, OnInit } from '@angular/core';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'user-item-detailed-dialog',
  templateUrl: './item-detailed-dialog.component.html',
  styleUrls: ['./item-detailed-dialog.component.scss']
})
export class ItemDetailedDialogComponent implements OnInit {

  item:ItemDetailedDto|undefined;

  constructor(private itemDataService:ItemDataService) { }

  ngOnInit(): void {
    this.itemDataService.LoadItem(1).pipe(take(1)).subscribe(res => {
      this.item = res;
      
    })
  }

}