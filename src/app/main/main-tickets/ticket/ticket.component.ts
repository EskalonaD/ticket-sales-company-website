import { Component, OnInit } from '@angular/core';

import { RETURNTICKETS } from 'src/app/data/mock-ReturnTickets';
import { TicketReturn } from 'src/app/data/TicketReturn';
import { SearchService } from 'src/app/main/search.service';



@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})

export class TicketComponent implements OnInit {
  constructor(private searchService: SearchService) { }

  tickets: TicketReturn[] = RETURNTICKETS;

  ngOnInit() {
    console.log(this.tickets)
    // console.log(this.searchService.typeOfFlight)
  }

}
