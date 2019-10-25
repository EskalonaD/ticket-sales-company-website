import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flightTime'
})
export class FlightTimePipe implements PipeTransform {

  transform(value: number): any {
    if(value % 1) {
      return `${Math.floor(value)}h. ${60 * (value % 1)} min`
    }
    return `${value}h.`
  }

}
