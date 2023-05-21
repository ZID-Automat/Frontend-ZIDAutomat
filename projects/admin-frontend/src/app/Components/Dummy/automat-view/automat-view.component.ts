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
    const imageSrc = 'https://www.zooroyal.de/magazin/wp-content/uploads/2022/09/katze-im-herbst-760x570-1-760x570.jpg'; // Bild-URL

  // Erstelle das <image>-Element und setze die erforderlichen Attribute
  const imageElement = document.createElementNS('http://www.w3.org/2000/svg', 'image');
  imageElement.setAttributeNS(null, 'width', event.target.getAttribute('width'));
  imageElement.setAttributeNS(null, 'height', event.target.getAttribute('height'));
  imageElement.setAttributeNS(null,'href', imageSrc);

  // Füge das <image>-Element dem Ziel-Element hinzu
  event.target.appendChild(imageElement);
  }
}
//5*8
