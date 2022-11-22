import { Component, Input, OnInit } from '@angular/core';
import { IconDataService } from '../../../Services/DataServices/icon-data-service';

@Component({
  selector: 'lib-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  @Input()IconName:string = "";

  constructor(public iconDataService:IconDataService) { }

  ngOnInit(): void {
  }
}
