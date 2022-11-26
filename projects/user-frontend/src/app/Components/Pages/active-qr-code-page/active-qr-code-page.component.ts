import { ThemeDataService } from './../../../../../../automat-shared/src/lib/Services/DataServices/theme-data.service';
import { BorrowDto } from 'AutomatApi';
import { QrCodeDataService } from './../../../Services/DataServices/qrCodeData.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'user-active-qr-code-page',
  templateUrl: './active-qr-code-page.component.html',
  styleUrls: ['./active-qr-code-page.component.scss'],
})
export class ActiveQrCodePageComponent implements OnInit {
  Borrows: BorrowDto[] = undefined!;

  constructor(private QrCodeDataService: QrCodeDataService, public ThemeDataService:ThemeDataService) {}

  ngOnInit(): void {
    this.QrCodeDataService.activeQrCodes()
      .pipe(take(1))
      .subscribe((res) => {
        this.Borrows = res;
      });
  }
}
