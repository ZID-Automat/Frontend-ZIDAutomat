import { Injectable } from '@angular/core';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faCoffee, faEyeSlash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IconDataService {

  Icons: Map<string,IconDefinition> = new Map<string, IconDefinition>()

  constructor() { 
    this.Icons.set("eye",faEye);
    this.Icons.set("eyeslash",faEyeSlash);
  }

  getIcon(Icon:string):IconDefinition {
    const Ic = this.Icons.get(Icon)
    if(!Ic){
      console.error("Icon "+Icon+" not Found")
    }
    return Ic as IconDefinition;
  }
}