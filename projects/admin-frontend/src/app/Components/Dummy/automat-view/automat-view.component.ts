import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'admin-automat-view',
  templateUrl: './automat-view.component.html',
  styleUrls: ['./automat-view.component.scss']
})
export class AutomatViewComponent implements OnInit, AfterViewInit {

  @ViewChildren("DragablePoint") DragablePoints: QueryList<HTMLElement> = null!;

  constructor() { }
  ngAfterViewInit(): void {
    this.DragablePoints.forEach((rect) => {
      // Registrieren Sie den Dragstart-Listener
    rect.addEventListener("dragstart", event => {
      event.dataTransfer?.setData("text/plain", "Dies ist ein Test");
    });
    
    // Registrieren Sie den Dragover-Listener
    rect.addEventListener("dragover", event => {
      event.preventDefault();
    });
    
    // Registrieren Sie den Drop-Listener
    rect.addEventListener("drop", event => {
      event.preventDefault();
      const data = event.dataTransfer?.getData("text/plain");
      console.log(data);
    });
    });
  }

  ngOnInit(): void {

  }
}

//5*8
