import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BorrowDataDto,BorrowResponseDto,UBorrowService } from 'AutomatApi';

@Injectable({
  providedIn: 'root'
})
export class BorrowOperationService {

  constructor(private uBorrowService:UBorrowService) { }

  Borrow(data:BorrowDataDto):Observable<BorrowResponseDto>{
    return this.uBorrowService.uBorrowBorrowPost$Json({body:data})
  }
}
