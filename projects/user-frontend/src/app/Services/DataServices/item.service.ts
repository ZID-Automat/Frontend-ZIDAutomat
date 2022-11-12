import { UItemService,ItemDisplayDto } from 'AutomatApi';
import { Subject, BehaviorSubject, take, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private UItemService:UItemService) { }

  public LoadAllItems():Observable<ItemDisplayDto[]>{
    return this.UItemService.uItemGetAllItemsGet$Json();
  }
  public LoadAllPrevItems():Observable<ItemDisplayDto[]>{
    return this.UItemService.uItemGetPrevBorrowedGet$Json();
  }
}
