import { UserFrontendRoutes } from './../../../../app-routing.module';
import { map, take } from 'rxjs/operators';
import { ItemDisplayDto } from 'AutomatApi'
import { ThemeDataService } from 'AutomatShared';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetItemDialogData, ItemDetailedDialogComponent } from '../../../Dialogs/item-detailed-dialog/item-detailed.dialog';
import { Router } from '@angular/router';
import { ItemCardComponent } from '../item-card-deck/item-card/item-card.component';

@Component({
  selector: 'user-item-card-deck-mobile',
  templateUrl: './item-card-deck-mobile.component.html',
  styleUrls: ['./item-card-deck-mobile.component.scss']
})
export class ItemCardDeckMobileComponent implements OnInit, AfterViewInit {

  @Input()Items:ItemDisplayDto[] = undefined!
  @Input()ChangeSubStatei:(state:boolean)=>void = (b)=>{}  

  @ViewChildren('ItemCards') public ItemCards!: QueryList<ItemCardComponent>;
  
  PagePos:number = 0;
  PageSize:number = 3;

  FakeItems:any;

  contWidth = 0


  constructor(private ElementRef:ElementRef, public ThemeDataService:ThemeDataService, public dialog: MatDialog, private router:Router) {
   }
  ngAfterViewInit(): void {
    this.ItemCards.get(1)?.elementRef.nativeElement.scrollIntoView({behavior: ("instant"),block:"center",inline:"center"});  
    this.ItemCards.get(0)?.elementRef.nativeElement.scrollIntoView({behavior: ("instant"),block:"center",inline:"center"}); 
  }

  ngOnInit(): void {
 
  }

  clickItemCard(i:number){
    this.ChangeSubStatei(false)
    this.router.navigate([UserFrontendRoutes.Home,this?.Items[i].id??""])
    ItemDetailedDialogComponent.openDialog(this.dialog,i,this.Items?.map(x=>x.id??0)??[]).afterClosed().pipe(take(1)).subscribe(()=>{
      this.router.navigate([UserFrontendRoutes.Home,""]);
    });
  }

}
