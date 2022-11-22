import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BorrowDataDto,BorrowResponse,UBorrowService } from 'AutomatApi';

@Injectable({
  providedIn: 'root'
})
export class BorrowOperationService {

  constructor(private uBorrowService:UBorrowService) { }

  Borrow(data:BorrowDataDto):Observable<BorrowResponse>{
    return this.uBorrowService.uBorrowBorrowPost$Json({body:data})
  }
}
