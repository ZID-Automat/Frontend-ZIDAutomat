import { ItemDetailedDto } from 'AutomatApi';
import { ActivatedRoute } from '@angular/router';
import { ItemDataService } from './../../../Services/DataServices/itemData.service';
import { Component, OnInit } from '@angular/core';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'user-item-detailed-page',
  templateUrl: './item-detailed-page.component.html',
  styleUrls: ['./item-detailed-page.component.scss']
})
export class ItemDetailedPageComponent implements OnInit {

  item:ItemDetailedDto|undefined;

  constructor(private itemDataService:ItemDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemDataService.LoadItem(params['id']).pipe(take(1)).subscribe(res => {
        this.item = res;
        
      })
    });
  }

}