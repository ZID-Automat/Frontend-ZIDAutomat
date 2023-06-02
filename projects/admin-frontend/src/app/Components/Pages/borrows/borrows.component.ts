import { UserAdmiBorrowDto } from './../../../../../../automat-api/src/API/models/user-admi-borrow-dto';
import { ABorrowInfoService } from 'AutomatApi';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

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
    this.ABorrowInfoService.allBorrowsGet$Json().pipe(take(1)).subscribe((data) => {
      this.AllBorrows = data;
    });
    this.ABorrowInfoService.toDealWithBorrowsGet$Json().pipe(take(1)).subscribe((data) => {
      this.ToDealWithBorrows = data;
    });
    this.ABorrowInfoService.finishedBorrowsGet$Json().pipe(take(1)).subscribe((data) => {
      this.FinishedBorrows = data;
    });
    this.ABorrowInfoService.openBorrowsGet$Json().pipe(take(1)).subscribe((data) => {
      this.OpenBorrows = data;
    });
  }

}
