import { Injectable } from '@angular/core';
import { faChevronLeft,faChevronRight, faXmark, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ReplaySubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IconDataService {

  Icons: Map<string,IconDefinition> = new Map<string, IconDefinition>()

  constructor() { 
    this.Icons.set("ArrowLeft",faChevronLeft)
    this.Icons.set("ArrowRight",faChevronRight)
    this.Icons.set("XMark",faXmark)
  }

  getIcon(Icon:string):IconDefinition {
    const Ic = this.Icons.get(Icon)
    if(!Ic){
      console.error("Icon "+Icon+" not Found")
    }
    return Ic as IconDefinition;
  }
}