import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { CategoryUpdateDto,CategoryAddDto, AConfCategoriesService } from 'AutomatApi';

@Component({
  selector: 'admin-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  rows:any = [];
  loadingIndicator = true;
  reorderable = true;

  columns = [{ name: 'Id' }, { name: 'Name' },{ name: 'Beschreibung' }];

  ColumnMode = ColumnMode

  constructor(private AConfCategoriesService:AConfCategoriesService) {
    this.loadingIndicator = false;

  }
  ngOnInit(): void {
    this.load();
  }

  load(){
    this.AConfCategoriesService.aConfCategoriesGetConfCategoriesGet$Json().subscribe((data:any) => {
      this.rows = data;
    })
  }

  

  

}
