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

  columns = [{ name: 'Id' }, { name: 'Name' },{ name: 'Description' }];

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

   saveChanges(event:any) {
    let data = event.newValue as CategoryUpdateDto;
    this.AConfCategoriesService.aConfCategoriesUpdateConfCategoryPatch({body:data}).subscribe((data:any) => {
      this.load();
    })
   }
   onRowClicki(event:any) {
    if(event.type == "click") {
      console.log(event.row) 
        this.load();
      }
    }

    addNewCategory(){
         let name = (<HTMLInputElement>document.getElementById("categoryName")).value;
        let description = (<HTMLInputElement>document.getElementById("categoryDescription")).value;
        this.AConfCategoriesService.aConfCategoriesAddCategoryPost({body:{name:name,description:description}}).subscribe((data:any) => {
         this.load();
        })
       }
      }
