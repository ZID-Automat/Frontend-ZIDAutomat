import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'admin-automat-view',
  templateUrl: './automat-view.component.html',
  styleUrls: ['./automat-view.component.scss']
})
export class AutomatViewComponent implements AfterViewInit {

  @ViewChildren("Boxi") DragImgs: QueryList<ElementRef<any>> = null!;

  @Output() OnDragPointIdsLoad:EventEmitter<string[]> = new EventEmitter();

  ngAfterViewInit(): void {
    let ids:string[] = []
    this.OnDragPointIdsLoad.emit(ids);
  }

  public drop(event:any) {
    console.log(event);
    console.log("hallo");
  }

  public allowDrop(event:any){
    event.preventDefault();
  }

  public dropedItem(event:DragEvent){

    const data = JSON.parse(event.dataTransfer?.getData("text") as string);

    const el = ((event.target as HTMLElement).parentElement)?.children
    const array = Array.from(el!);

    let imagei = array.find(e=>e.tagName == "image");
    (imagei as any).href.baseVal = data.image;

  }
}
//5*8x