import { Component, OnInit } from '@angular/core';

import { ONEWAYTICKETS } from 'src/app/data/mock-OneWayTickets';
import { TicketOneWay } from 'src/app/data/TicketOneWay';

@Component({
  selector: 'app-one-way-trip',
  templateUrl: './one-way-trip.component.html',
  styleUrls: ['./one-way-trip.component.css']
})
export class OneWayTripComponent implements OnInit {

  constructor() { }

  tickets: TicketOneWay[] = ONEWAYTICKETS;

  ngOnInit() {
    console.log(this.tickets)
  }

}
