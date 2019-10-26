import { Component, OnInit } from '@angular/core';
import { TicketMulti } from 'src/app/data/TicketMulti';
import { MULTITICKETS } from 'src/app/data/mock-MultiTickets'

@Component({
  selector: 'app-multi-trip',
  templateUrl: './multi-trip.component.html',
  styleUrls: ['./multi-trip.component.css']
})
export class MultiTripComponent implements OnInit {

  constructor() { }

  tickets: TicketMulti[] = MULTITICKETS;


  ngOnInit() {
    console.log(this.tickets)
  }

}