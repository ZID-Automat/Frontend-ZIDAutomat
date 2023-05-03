import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-borrowed-view',
  templateUrl: './borrowed-view.component.html',
  styleUrls: ['./borrowed-view.component.scss'],
})
export class BorrowedViewComponent implements OnInit {
  public borrowed_items: BorrowedItem[] = [
    {
      id: 1,
      username: 'SCH20369',
      item_name: 'Item 1',
      status: 'Borrowed',
      date_borrowed: '2021-01-01',
      date_returned: '2021-01-01',
      date_due: '2021-01-01',
    },
    {
      id: 2,
      username: 'SCH20369',
      item_name: 'Item 2',
      status: 'Borrowed',
      date_borrowed: '2021-01-01',
      date_returned: '2021-01-01',
      date_due: '2021-01-01',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

export interface BorrowedItem {
  id: number;
  username: string;
  item_name: string;
  status: string;
  date_borrowed: string;
  date_returned: string;
  date_due: string;
}
