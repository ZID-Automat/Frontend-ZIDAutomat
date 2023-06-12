import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-agbs-page',
  templateUrl: './agbs-page.component.html',
  styleUrls: ['./agbs-page.component.scss']
})
export class AgbsPageComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }


  ngOnInit(): void {
   
  }

}