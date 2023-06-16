import { Injectable } from '@angular/core';

const FlatColors = require('flat-colors');
const convert = require('color-convert');

@Injectable({
  providedIn: 'root',
})
export class ColorServiceService {
  constructor() {}

  public getColors(count: number):{
    backgroundColors: string[],
    hoverBackgroundColors: string[],
    borderColors: string[],
  } 
  {
    let backgroundColors: string[] = [];
    let hoverBackgroundColors: string[] = [];
    let borderColors: string[] = [];

    for (let i = 0; i < count; i++) {
      let color;

      let maxI = 0;
      do {
        color = FlatColors()[3];
        maxI++;
      } while (convert.hex.hsl(color)[1] < 25 && maxI < 100);

      backgroundColors.push(color + '80');
      hoverBackgroundColors.push(color + 'C0');
      borderColors.push(color + 'CA');
    }
    return {
      backgroundColors: backgroundColors,
      hoverBackgroundColors: hoverBackgroundColors,
      borderColors: borderColors,
    }
  }

  public getColorFromArr(colors:string[]):{
    backgroundColors: string[],
    hoverBackgroundColors: string[],
    borderColors: string[],
  } {
    let backgroundColors: string[] = [];
    let hoverBackgroundColors: string[] = [];
    let borderColors: string[] = [];

    for (let i = 0; i < colors.length; i++) {
      let color = colors[i];
      backgroundColors.push(color + '80');
      hoverBackgroundColors.push(color + 'C0');
      borderColors.push(color + 'CA');
    }
    return {
      backgroundColors: backgroundColors,
      hoverBackgroundColors: hoverBackgroundColors,
      borderColors: borderColors,
    }
  }
}
