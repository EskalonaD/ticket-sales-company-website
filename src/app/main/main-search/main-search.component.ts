/*import { Component, OnInit } from '@angular/core';
import { DateRange } from '@uiowa/date-range-picker';
@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css']
})
export class AppComponent implements OnInit {
  dateRange = new DateRange();
  maxDate = new Date();
  date: Date;
  ngOnInit(): void {
    this.maxDate.setDate(this.maxDate.getDate() + 20);
  }
}*/
import { Component, OnInit } from '@angular/core';
import { DateRange } from 'projects/uiowa/date-range-picker/src/public-api';

import { Airport } from '../../data/Airport';
import { AIRPORTS } from '../../data/flightFrom';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css']
})

export class MainSearchComponent implements OnInit {
  dateRange = new DateRange();
  maxDate = new Date();
  date: Date;
  flightFrom:Airport[] = AIRPORTS;
  showDeparture: boolean = false;

  ngOnInit(): void {
    this.maxDate.setDate(this.maxDate.getDate() + 20);
  }

  onKeyUp(event: any) {
    this.flightFrom = AIRPORTS.filter(({city}) => city.toLowerCase().includes(event.target.value.toLowerCase()));
    console.log(this.flightFrom);
    this.showDeparture = true;
  }

  onBlur() {
    this.showDeparture = false;
  }

  onFocus() {
    this.showDeparture = true;
  }
}
