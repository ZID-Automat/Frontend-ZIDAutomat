import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'admin-automat-view',
  templateUrl: './automat-view.component.html',
  styleUrls: ['./automat-view.component.scss']
})
export class AutomatViewComponent implements AfterViewInit {

  @ViewChildren("DragablePoint") DragablePoints: QueryList<HTMLElement> = null!;
  @ViewChildren("DragImages") DragImgs: QueryList<ElementRef<any>> = null!;

  @Output() OnDragPointIdsLoad:EventEmitter<string[]> = new EventEmitter();

  ngAfterViewInit(): void {
    let ids:string[] = []
    this.DragablePoints.forEach((element,i) => {
      console.log(element);
    });
    this.OnDragPointIdsLoad.emit(ids);
  }

  public drop(event:any) {
    console.log(event);
    console.log("hallo");
  }

  public allowDrop(event:any){
    event.preventDefault();
  }

  public dropedItem(event:any){
    let ele = this.DragImgs.get(0)?.nativeElement.href;
    ele.baseVal = "assets/Test.png"
    console.log(ele)
  }
}
//5*8
