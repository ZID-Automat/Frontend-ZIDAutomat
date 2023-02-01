import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isExpired'
})
export class IsExpiredPipe implements PipeTransform {

  transform(date:Date): unknown {
    const today = new Date();
    today.setHours(0, 0, 0, 0)
    return date < today;
  }

}
