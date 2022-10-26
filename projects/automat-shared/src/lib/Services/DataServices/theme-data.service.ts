import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeDataService {

  constructor() { }

  get textPrimaryColor():string{
    return "#ffffff"
  }

  get textSecondaryColor():string{
    return "#ffffff"
  }

  get primaryColor():string
  {
    return "#e20039";
  }

  get accentColor():string
  {
    return "#fb003f";
  }

  get waningColor():string
  {
    return "#ff0000";
  }
}
