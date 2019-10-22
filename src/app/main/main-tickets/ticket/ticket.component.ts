import { Component, OnInit } from '@angular/core';

import { RETURNTICKETS } from 'src/app/data/mock-ReturnTickets';
import { TicketReturn } from 'src/app/data/TicketReturn';




@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  constructor() { }
  
  tickets: TicketReturn[] = RETURNTICKETS;
  
  ngOnInit() {
    console.log(this.tickets)
  }

}
