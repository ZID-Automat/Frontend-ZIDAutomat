import { Observable } from 'rxjs';
import { BorrowDto, UQrCodeService } from 'AutomatApi';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QrCodeDataService {

  constructor(private UQrCodeService:UQrCodeService) { }

  activeQrCodes():Observable<BorrowDto[]>{
    return this.UQrCodeService.uQrCodeActiveQrCodesGet$Json()
  }

  allQrCodes():Observable<BorrowDto[]>{
    return this.UQrCodeService.uQrCodeAllQrCodesGet$Json();
  }

  activeQrCodesCount():Observable<number>{
    return this.UQrCodeService.uQrCodeActiveQrCodesCountGet$Json()
  }
}
