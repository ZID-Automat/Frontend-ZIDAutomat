import { SelectStockImageDialogComponent } from './../select-stock-image-dialog/select-stock-image-dialog.component';
import { CategoryUpdateDto } from './../../../../../../automat-api/src/API/models/category-update-dto';
import {
  AConfCategoriesService,
  AItemService,
  ItemAdminDetailedDto,
  ItemGetAllDto,
} from 'AutomatApi';
import {
  Component,
  Inject,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { take } from 'rxjs';
import { ManageCatsComponent } from '../manage-cats/manage-cats.component';

@Component({
  selector: 'admin-view-item-dialog',
  templateUrl: './view-item-dialog.component.html',
  styleUrls: ['./view-item-dialog.component.scss'],
})
export class ViewItemDialogComponent implements OnInit, AfterViewInit {
  constructor(
    public dialogRef: MatDialogRef<ViewItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public DialogData: any,
    private AConfCategoriesService: AConfCategoriesService,
    private AItemService: AItemService,
    private dialog: MatDialog
  ) {}

  currentImage = '';

  isAdd = false;

  @ViewChild('Name') Name: any;
  @ViewChild('Description') Description: any;
  @ViewChild('Price') Price: any;
  @ViewChild('Subname') Subname: any;
  @ViewChild('Selectiii') Select: any;

  cat: CategoryUpdateDto[] = [];
  data: ItemAdminDetailedDto = null!;

  defVal = 0;

  ngOnInit(): void {
    this.isAdd = this.DialogData.isAdd;
    this.loadcats();

    if (!this.isAdd) {
      this.AItemService.aItemGetItemInstancesGet$Json({
        id: this.DialogData.id!,
      })
        .pipe(take(1))
        .subscribe((res: number) => {
          this.iteminstanceCount = res;
        });
    }
  }

  loadcats() {
    this.AConfCategoriesService.aConfCategoriesGetConfCategoriesGet$Json()
      .pipe(take(1))
      .subscribe((data) => {
        this.cat = data;
      });
  }

  ngAfterViewInit(): void {
    if (!this.isAdd) {
      this.AItemService.aItemItemAdminDetailedGet$Json({
        id: this.DialogData.id!,
      })
        .pipe(take(1))
        .subscribe((data) => {
          this.data = data;
          this.defVal = this.cat!.find(
            (x) => x.id == this.data.categorieId
          )?.id!;
          this.currentImage = this.data.image!;
        });
    }
  }

  public static openDialog(
    dialog: MatDialog,
    id: number,
    isAdd: boolean = false
  ): MatDialogRef<ViewItemDialogComponent> {
    return dialog.open(ViewItemDialogComponent, {
      data: { id: id, isAdd: isAdd },
      width: isAdd ? '30%' : '70%',
      height: 'fit-content',
    });
  }

  public updateItem() {
    const data = this.GetData();
    this.AItemService.aItemItemDetailedAdminUpdatePatch({
      body: data,
    })
      .pipe(take(1))
      .subscribe((res) => {
        this.dialogRef.close();
      });
  }

  public addItem() {
    const data = this.GetData();

    if (
      data.categorieId == 0 ||
      data.description == '' ||
      data.name == '' ||
      data.price == 0 ||
      data.subname == '' ||
      data.image == ''
    ) {
      alert('Bitte füllen Sie alle Felder aus!');
      return;
    }

    this.AItemService.aItemItemDetailedAdminAddPost({
      body: data,
    })
      .pipe(take(1))
      .subscribe((res) => {
        this.dialogRef.close();
      });
  }

  public ManageCats() {
    ManageCatsComponent.openDialog(this.dialog, this.Name.nativeElement.value)
      .afterClosed()
      .subscribe((res) => {
        this.loadcats();
      });
  }

  public onFileSelected(event: any) {
    this.readFileAsDataURL(event.target.files[0]);
  }

  readFileAsDataURL(file: File) {
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      const result = event.target?.result;
      if (typeof result === 'string') {
        this.currentImage = result;
      }
    };
    reader.readAsDataURL(file);
  }

  public GetData() {
    const data = {
      name: this.Name.nativeElement.value,
      description: this.Description.nativeElement.value,
      price: this.Price.nativeElement.value,
      subname: this.Subname.nativeElement.value,
      categorieId: this.Select.value,
      image: this.currentImage,
      id: this?.data?.id,
    };
    return data;
  }

  public useStockImage() {
    SelectStockImageDialogComponent.openDialog(
      this.dialog,
      this.Name.nativeElement.value
    )
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          this.currentImage = data;
        }
      });
  }

  iteminstanceCount = 0;

  iteminstaddde = true;
  public IncII() {
    this.iteminstaddde = false;
    this.AItemService.aItemAddItemInstacePost({
      id: this.DialogData.id!,
    })
      .pipe(take(1))
      .subscribe((res) => {
        this.iteminstaddde = true;
        this.iteminstanceCount++;
      });
  }
}

// interface IAddItemDialogData {
//   name: string;
// }
