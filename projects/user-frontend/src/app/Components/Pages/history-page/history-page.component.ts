import { BorrowDto } from 'AutomatApi';
import { QrCodeDataService } from './../../../Services/DataServices/qrCodeData.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'user-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {

  Borrows:BorrowDto[] = null!

  constructor(private QrCodeDataService:QrCodeDataService) { }

  ngOnInit(): void {
    this.QrCodeDataService.allQrCodes()
    .pipe(take(1))
    .subscribe((res) => {
      this.Borrows = res;
    });
  }

}
