import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'admin-automat-view',
  templateUrl: './automat-view.component.html',
  styleUrls: ['./automat-view.component.scss']
})
export class AutomatViewComponent implements AfterViewInit {

  @ViewChildren("DragablePoint") DragablePoints: QueryList<HTMLElement> = null!;
  @Output() OnDragPointIdsLoad:EventEmitter<string[]> = new EventEmitter();

  ngAfterViewInit(): void {
    let ids:string[] = []
    this.DragablePoints.forEach((element,i) => {
      element.id = "DragablePoint"+i;
      ids.push(element.id);
    });
    this.OnDragPointIdsLoad.emit(ids);
  }

  public drop(event:any) {
    console.log(event);
    console.log("hallo");
  }
}

//5*8
