import { MatDialog } from '@angular/material/dialog';
import { SelectStockImageDialogComponent } from './../../Dialogs/select-stock-image-dialog/select-stock-image-dialog.component';
import { Subject, take, takeWhile } from 'rxjs';
import {
  ItemChangeLocationDto,
  ItemGetAllDto,
  ItemLocationDto,
  AItemService,
} from 'AutomatApi';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  AfterViewInit,
  Output,
  EventEmitter,
  ElementRef,
  Input,
  OnDestroy,
} from '@angular/core';
import { createClient } from 'pexels';

@Component({
  selector: 'admin-automat-view',
  templateUrl: './automat-view.component.html',
  styleUrls: ['./automat-view.component.scss'],
})
export class AutomatViewComponent implements OnInit, OnDestroy, AfterViewInit {
  @Output() public onDrop = new EventEmitter<{
    Location: string;
    ItemId: number;
  }>();
  @Input() public itemGetAllDto: Subject<ItemGetAllDto[]> = new Subject<
    ItemGetAllDto[]
  >();

  @ViewChildren('DragBox') boxes: QueryList<ElementRef<HTMLElement>> = null!;

  alive = true;

  disabledButton = false;

  constructor(private AItemService: AItemService, private dialog:MatDialog) {}
  ngAfterViewInit(): void {
    this.itemGetAllDto.pipe(takeWhile(() => this.alive)).subscribe((data) => {
      this.Clear();
      data.forEach((e) => {
        if (e.locationImAutomat) {
          const Boxnumber = this.LocationToBoxNumber(e.locationImAutomat!);
          const info = this.extractImportantInformation(
            this.boxes.find((e) => e.nativeElement.id == Boxnumber)!
              .nativeElement!.firstChild!,
            e.id!
          );
          info.ImageElement.href.baseVal = e.image;
          info.ImageElement.id = info.ImageId;

        }
      });
      this.data = data;

    });


  }

  data: any = [];

  @Output() public reLoad: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
  }

  reload() {
    this.reLoad.emit();
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  public drop(event: any) {
  }

  public allowDrop(event: any) {
    event.preventDefault();
  }

  public dropedItem(event: DragEvent) {
    const data = JSON.parse(event.dataTransfer?.getData('text') as string);

    const ElementData = this.extractImportantInformation(event.target, data.id);

    //check if the item is already in the automat
    const PrevElement = this.boxes.find((e) => {
      const info = this.extractImportantInformation(
        e.nativeElement.firstChild,
        data.id
      );
      return info.ImageElement.id == ElementData.ImageId;
    });

    if (PrevElement) {
      const PrevElementData = this.extractImportantInformation(
        PrevElement.nativeElement.firstChild,
        data.id
      );
      PrevElementData.ImageElement.href.baseVal = '';
      PrevElementData.ImageElement.id = '';
    }

    ElementData.ImageElement!.id = ElementData.ImageId;
    ElementData.ImageElement.href.baseVal = data.image;



    this.onDrop.emit({
      Location: this.BoxNumberToLocation(ElementData.ParrentElement.id),
      ItemId: data.id,
    });
  }

  private extractImportantInformation(
    target: any,
    id: number
  ): { ParrentElement: HTMLElement; ImageElement: any; ImageId: string } {
    const el = (target as HTMLElement).parentElement!;
    let imagei = Array.from(el?.children!).find((e) => e.tagName == 'image');
    const imageId = 'ImageID' + id;
    return {
      ParrentElement: el,
      ImageElement: imagei as HTMLImageElement,
      ImageId: imageId,
    };
  }

  public BoxNumberToLocation(boxNumber: string) {
    const number = parseInt(boxNumber.substring(4));
    const row = Math.floor(number / 8);
    const col = number % 8;
    const rowChar = String.fromCharCode(65 + row);
    const colChar = String.fromCharCode(65 + col);
    return rowChar + colChar;
  }

  public LocationToBoxNumber(location: string) {
    if (!location) return null;
    const row = location.charCodeAt(0) - 65;
    const col = location.charCodeAt(1) - 65;
    return 'Boxi' + (row * 8 + col);
  }

  public dragi(event: any) {
    event.dataTransfer!.effectAllowed = 'move';
  }

  Save() {
    this.disabledButton = true
    const ItemChangeLocations: ItemChangeLocationDto = {
      itemLocations: this.data.map((e: any) => {
        return { Id: e.id!, Location: e.locationImAutomat! };
      }) as Array<ItemLocationDto>,
    };
    this.AItemService.aItemSetItemPositionPost({
      body: ItemChangeLocations,
    })
      .pipe(take(1))
      .subscribe((data) => {
        this.disabledButton = false
      });
  }

  Clear() {

    this.boxes.forEach(b=>{
      this.extractImportantInformation(b.nativeElement.firstChild!, 0).ImageElement.id = "";
    })

    this.data.forEach((e: any) => {
      const Boxnumber = this.LocationToBoxNumber(e.locationImAutomat!);
      if (Boxnumber) {
        const info = this.extractImportantInformation(
          this.boxes.find((e) => e.nativeElement.id == Boxnumber)!
            .nativeElement!.firstChild!,
          e.id!
        );
        info.ImageElement.href.baseVal = '';
        info.ImageElement.id = '';
        e.locationImAutomat = '';
      }
    });
  }

  //fills the automat with items from the top left corner
  AutoFill() {
    let currentPos = -1;
    this.data.forEach((locAutomat:ItemGetAllDto ) => {
        if(!locAutomat.locationImAutomat){
          do{
            currentPos++;
            const besetzt = this.boxes.find((e) => e.nativeElement.id == 'Boxi' + currentPos)
            const wichtigInfo = this.extractImportantInformation(besetzt!.nativeElement.firstChild, 0)

              if(wichtigInfo?.ImageElement.id == ''){
              wichtigInfo.ImageElement.href.baseVal = locAutomat.image;
              wichtigInfo.ImageElement.id = 'ImageID' + locAutomat.id;
              locAutomat.locationImAutomat = this.BoxNumberToLocation(wichtigInfo.ParrentElement.id);
              return
            }
          }while(currentPos < 40)
        }
    });

  }

  remove(event:any){
    var target = event.target
    const info  = this.extractImportantInformation(target,0)
    if(info.ImageElement.id != ''){
      const item = this.data.find((e:any)=>e.id == parseInt(info.ImageElement.id.substring(7)))


      info.ImageElement.href.baseVal = '';
      info.ImageElement.id = '';
      item.locationImAutomat = '';
    }
  }

  tooltip(event:any){
  }
}
//5*8x
