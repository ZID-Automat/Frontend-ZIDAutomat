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

  get dissabledColor():string{
    return "#e8e4e4"
  }

  get PrimaryColorAdmin():string{
    return "#0ea5e9"
  }

  get AccentColorAdmin():string{
    return "#1d4ed8"
  }
}
