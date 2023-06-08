import { UserAdmiBorrowDto } from './../../../../../../automat-api/src/API/models/user-admi-borrow-dto';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { ABorrowInfoService } from 'AutomatApi';

@Component({
  selector: 'admin-borrows',
  templateUrl: './borrows.component.html',
  styleUrls: ['./borrows.component.scss']
})
export class BorrowsComponent implements OnInit {

  public AllBorrows:UserAdmiBorrowDto[] | null = null!
  public ToDealWithBorrows:UserAdmiBorrowDto[]| null = null!
  public FinishedBorrows:UserAdmiBorrowDto[]| null = null!
  public OpenBorrows:UserAdmiBorrowDto[]| null = null!

  constructor(private ABorrowInfoService:ABorrowInfoService) { }

  ngOnInit(): void {
    this.ABorrowInfoService.aBorrowInfoAllBorrowsGet$Json().pipe(take(1)).subscribe((data) => {
      this.AllBorrows = data;
    });
    this.ABorrowInfoService.aBorrowInfoToDealWithBorrowsGet$Json().pipe(take(1)).subscribe((data) => {
      this.ToDealWithBorrows = data;
    });
    this.ABorrowInfoService.aBorrowInfoFinishedBorrowsGet$Json().pipe(take(1)).subscribe((data) => {
      this.FinishedBorrows = data;
    });
    this.ABorrowInfoService.aBorrowInfoOpenBorrowsGet$Json().pipe(take(1)).subscribe((data) => {
      this.OpenBorrows = data;
    });
  }

}
