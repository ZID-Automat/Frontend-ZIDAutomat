import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addNDays'
})
export class AddNDaysPipe implements PipeTransform {

  transform(date:Date, n:number): Date {
    let d =  new Date()
    d.setDate(date.getDate()+n)
    return d;
  }

}
