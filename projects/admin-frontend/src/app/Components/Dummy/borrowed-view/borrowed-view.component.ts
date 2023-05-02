import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-borrowed-view',
  templateUrl: './borrowed-view.component.html',
  styleUrls: ['./borrowed-view.component.scss'],
})
export class BorrowedViewComponent implements OnInit {
  public borrowed_items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {}

  ngOnInit(): void {}
}
