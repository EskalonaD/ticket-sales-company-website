import { TicketReturn } from './../../../../data/TicketReturn';
import { Component, OnInit, Input } from '@angular/core';

import { SearchService } from 'src/app/main/search.service';
import { TicketMulti } from 'src/app/data/TicketMulti';

@Component({
  selector: 'app-return-trip',
  templateUrl: './return-trip.component.html',
  styleUrls: ['./return-trip.component.css']
})
export class ReturnTripComponent implements OnInit {

  // get tickets() {
  //   return this.searchService.calculateTickets();
  // }

  constructor() { }
  @Input() tickets: any[]

  // tickets: TicketReturn[] = RETURNTICKETS;

  ngOnInit() {
  }

  onSubmit(value) {
    console.log(value);

  }

}
