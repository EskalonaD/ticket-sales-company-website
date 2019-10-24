import { MainTicketService } from './../main-tickets.service';
import { Component, OnInit } from '@angular/core';

import { RETURNTICKETS } from 'src/app/data/mock-ReturnTickets';
import { TicketReturn } from 'src/app/data/TicketReturn';
import { Router } from '@angular/router';




@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  tickets = []
  constructor(private ticketBook: MainTicketService) { }

  ngOnInit() {
    this.tickets = this.ticketBook.results
  }

}
