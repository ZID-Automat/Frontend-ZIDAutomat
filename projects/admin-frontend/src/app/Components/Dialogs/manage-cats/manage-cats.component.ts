import { AConfCategoriesService, CategoryUpdateDto } from 'AutomatApi';
import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  ViewChild,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { SelectStockImageDialogComponent } from '../select-stock-image-dialog/select-stock-image-dialog.component';

@Component({
  selector: 'admin-manage-cats',
  templateUrl: './manage-cats.component.html',
  styleUrls: ['./manage-cats.component.scss'],
})
export class ManageCatsComponent implements OnInit, AfterViewInit {
  public editing: any = {};

  public static openDialog(
    dialog: MatDialog,
    Suche: string
  ): MatDialogRef<ManageCatsComponent> {
    return dialog.open(ManageCatsComponent, {
      width: '60%',
      height: 'fit-content',
      data: { startSuch: Suche },
    });
  }

  @ViewChild('Name') Name: any;
  @ViewChild('Description') Description: any;

  rows: any = [];
  loadingIndicator = true;
  reorderable = true;

  columns = [{ name: 'Id' }, { name: 'Name' }, { name: 'Description' }];

  ColumnMode = ColumnMode;
  constructor(
    private AConfCategoriesService: AConfCategoriesService,
    private changeDetector: ChangeDetectorRef
  ) {
    this.loadingIndicator = false;
  }
  ngAfterViewInit(): void {
    document.getElementById('catsIDii')?.click();
    setTimeout(() => {
      document.getElementById('catsIDii')?.click();
    }, 100);
  }
  ngOnInit(): void {
    this.load();
  }

  load() {
    this.AConfCategoriesService.aConfCategoriesGetConfCategoriesGet$Json().subscribe(
      (data: any) => {
        this.rows = data;
        setTimeout(() => {
          document.getElementById('catsIDii')?.click();
          this.changeDetector.detectChanges();
        }, 1000);
        this.rows = data;
        setTimeout(() => {
          this.changeDetector.detectChanges();
        }, 3000);
      }
    );
  }

  updateValue(event: any, cell: any, rowIndex: any) {
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    const da = this.rows[rowIndex];
    if (cell == 'name') {
      da.name = event.target.value;
    }
    if (cell == 'Description') {
      da.description = event.target.value;
    }
    this.AConfCategoriesService.aConfCategoriesUpdateConfCategoryPatch({
      body: da,
    }).subscribe((data: any) => {});
  }

  saveChanges(event: any) {
    let data = event.newValue as CategoryUpdateDto;
    this.AConfCategoriesService.aConfCategoriesUpdateConfCategoryPatch({
      body: data,
    }).subscribe((data: any) => {
      this.load();
    });
  }
  onRowClicki(event: any) {
    if (event.type == 'click') {
      this.load();
    }
  }

  addNewCategory() {
    const name = this.Name.nativeElement.value;
    const description = this.Description.nativeElement.value;

    if(name == '' || description == '') alert("Please fill out all fields!")

    this.AConfCategoriesService.aConfCategoriesAddCategoryPost({
      body: { name: name, description: description },
    }).subscribe(() => {
      this.load();
      alert("Category added!")
    });

    this.Name.nativeElement.value = '';
    this.Description.nativeElement.value = '';
  }
}
