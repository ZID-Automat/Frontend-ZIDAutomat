import { Component, Input, OnInit } from '@angular/core';
import { BorrowDto } from 'AutomatApi';

@Component({
  selector: 'user-borrow-display',
  templateUrl: './borrow-display.component.html',
  styleUrls: ['./borrow-display.component.scss']
})
export class BorrowDisplayComponent implements OnInit {

  @Input() borrow:BorrowDto = undefined!;

  constructor() { }

  ngOnInit(): void {
  }

}
