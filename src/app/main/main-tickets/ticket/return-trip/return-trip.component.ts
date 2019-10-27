import { Component, OnInit } from '@angular/core';

import { RETURNTICKETS } from 'src/app/data/mock-ReturnTickets';
import { TicketReturn } from 'src/app/data/TicketReturn';

@Component({
  selector: 'app-return-trip',
  templateUrl: './return-trip.component.html',
  styleUrls: ['./return-trip.component.css']
})
export class ReturnTripComponent implements OnInit {

  constructor() { }

  tickets: TicketReturn[] = RETURNTICKETS;

  ngOnInit() {
    console.log(this.tickets)
  }

}