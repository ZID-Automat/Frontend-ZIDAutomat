import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements OnInit {

  @Input() dis:boolean = false
  @Input() label:string = ""

  private _innerhide:boolean = false

  get innerHide():boolean{
    return this._innerhide
  }

  constructor() { }

  ngOnInit(): void {
  }

  startFetch(){
    this._innerhide = true;
  }

  finsihFetch(){
    setTimeout(()=>this._innerhide = false, 1000)
  }
}
