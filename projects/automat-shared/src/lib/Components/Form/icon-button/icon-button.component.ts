import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ThemeDataService } from '../../../Services/DataServices/theme-data.service';

@Component({
  selector: 'shared-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {

  @Input()IconName:string = "";
  @Input()Tooltip:string = "Hallo"
  @Output() public Clicked = new EventEmitter();

  constructor(public themeDataService:ThemeDataService) { }

  ngOnInit(): void {
  }

}
