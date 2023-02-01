import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BorrowDataDto, UBorrowService, BorrowDto, QrCodeDto } from 'AutomatApi';

@Injectable({
  providedIn: 'root'
})
export class BorrowOperationService {

  constructor(private uBorrowService:UBorrowService) { }

  Borrow(data:BorrowDataDto):Observable<QrCodeDto>{
    return this.uBorrowService.uBorrowBorrowPost$Json({body:data})
  }
}
