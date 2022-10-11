import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, OnInit } from '@angular/core';
import { IconDataService } from '../../../Services/DataServices/icon-data-service';

@Component({
  selector: 'lib-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  @Input()IconName:string = "";

  public IconD:any;

  constructor(private iconDataService:IconDataService) { }

  ngOnInit(): void {
    this.IconD = this.iconDataService.getIcon(this.IconName)
  }

}
