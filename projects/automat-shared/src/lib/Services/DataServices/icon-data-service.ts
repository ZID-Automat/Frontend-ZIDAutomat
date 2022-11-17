import { Injectable } from '@angular/core';
import { faChevronLeft,faChevronRight, faXmark, IconDefinition,faQrcode, faTriangleExclamation, faHistory, faBarsStaggered, faQuestion, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
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
    this.Icons.set("QrCode",faQrcode)
    this.Icons.set("TriangleExclamation",faTriangleExclamation)
    this.Icons.set("History",faBarsStaggered)
    this.Icons.set("Help",faQuestion)
    this.Icons.set("Eye",faEye)
    this.Icons.set("EyeSlash",faEyeSlash)
    
  }

  getIcon(Icon:string):IconDefinition {
    const Ic = this.Icons.get(Icon)
    if(!Ic){
      console.error("Icon "+Icon+" not Found")
    }
    return Ic as IconDefinition;
  }
}