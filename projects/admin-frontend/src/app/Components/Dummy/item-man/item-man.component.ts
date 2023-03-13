import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-item-man',
  templateUrl: './item-man.component.html',
  styleUrls: ['./item-man.component.scss']
})
export class ItemManComponent implements OnInit {

public h = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,16,18]

  constructor() { }

  ngOnInit(): void {
  }

}
