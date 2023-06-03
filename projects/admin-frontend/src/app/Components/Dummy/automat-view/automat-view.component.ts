import { Subject, takeWhile } from 'rxjs';
import { ItemGetAllDto } from 'AutomatApi';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, Output, EventEmitter, ElementRef, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'admin-automat-view',
  templateUrl: './automat-view.component.html',
  styleUrls: ['./automat-view.component.scss']
})
export class AutomatViewComponent implements OnInit, OnDestroy{

  @Output() public onDrop = new EventEmitter<{Location:string,ItemId:number}>();
  @Input() public itemGetAllDto:Subject<ItemGetAllDto[]> = new Subject<ItemGetAllDto[]>();

  @ViewChildren("DragBox") boxes:QueryList<ElementRef<HTMLElement>> = null!;

  alive = true

  ngOnInit(): void {
    this.itemGetAllDto.pipe(takeWhile(()=>this.alive)).subscribe((data)=>{
      data.forEach(e=>{
        const Boxnumber = this.LocationToBoxNumber(e.locationImAutomat!)
        const info = this.extractImportantInformation(this.boxes.find(e=>e.nativeElement.id == Boxnumber)!.nativeElement!.firstChild!,e.id!)
        info.ImageElement.href.baseVal = e.image;
      })
    });
  }

  ngOnDestroy(): void {
      this.alive = false;
  }

  public drop(event:any) {
    console.log(event);
  }

  public allowDrop(event:any){
    event.preventDefault();
  }

  public dropedItem(event:DragEvent){
    const data = JSON.parse(event.dataTransfer?.getData("text") as string);

    const ElementData =this.extractImportantInformation(event.target,data.id)
    
    //check if the item is already in the automat
    const PrevElement = this.boxes.find(e=>{
      const info = this.extractImportantInformation(e.nativeElement.firstChild,data.id)
      console.log(info.ImageElement.id);
      return info.ImageElement.id == ElementData.ImageId;
    });


    if(PrevElement){
      const PrevElementData = this.extractImportantInformation(PrevElement.nativeElement.firstChild,data.id);
      PrevElementData.ImageElement.href.baseVal = "";
      PrevElementData.ImageElement.id = "";
    }

    ElementData.ImageElement!.id = ElementData.ImageId;
    ElementData.ImageElement.href.baseVal = data.image;

    this.onDrop.emit({Location:this.BoxNumberToLocation(ElementData.ParrentElement.id),ItemId:data.id});	
  }

  private extractImportantInformation(target:any,id:number):{ParrentElement:HTMLElement,ImageElement:any,ImageId:string}{
    const el = (target as HTMLElement).parentElement!;
    let imagei = Array.from((el)?.children!).find(e=>e.tagName == "image");
    const imageId = "ImageID"+id;
    return {
      ParrentElement:el,
      ImageElement:imagei as HTMLImageElement,
      ImageId:imageId
    }
  }

  private BoxNumberToLocation(boxNumber:string) {
    const number =parseInt(boxNumber.substring(4))
    const row = Math.floor(number / 8);
    const col = number % 8;
    const rowChar = String.fromCharCode(65 + row);  
    const colChar = String.fromCharCode(65 + col);
    return rowChar + colChar;
  }

  public LocationToBoxNumber(location:string) {
    const row = location.charCodeAt(0) - 65;
    const col = location.charCodeAt(1) - 65;
    return "Boxi"+(row * 8 + col);
  }

  public dragi(event:any){
    event.dataTransfer!.effectAllowed = 'move';
  }

}
//5*8x