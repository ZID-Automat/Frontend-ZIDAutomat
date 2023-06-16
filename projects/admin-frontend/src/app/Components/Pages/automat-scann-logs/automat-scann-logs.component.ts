import { AdminLogShowService, LogQrCodeAdminDto } from 'AutomatApi';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'admin-automat-scann-logs',
  templateUrl: './automat-scann-logs.component.html',
  styleUrls: ['./automat-scann-logs.component.scss']
})
export class AutomatScannLogsComponent implements OnInit {

  constructor(public AdminLogShowService:AdminLogShowService) { }

  all:LogQrCodeAdminDto[] = [];
  ejct:LogQrCodeAdminDto[] = [];
  invalid:LogQrCodeAdminDto[] = [];
  

  ngOnInit(): void {
    this.AdminLogShowService.adminLogShowEjectedItemsGet$Json().pipe(take(1)).subscribe(res=>this.ejct = res);
    this.AdminLogShowService.adminLogShowInvalidItemsGet$Json().pipe(take(1)).subscribe(res=>this.invalid = res);
    this.AdminLogShowService.adminLogShowScannedItemsGet$Json().pipe(take(1)).subscribe(res=>this.all = res);

  }

}
