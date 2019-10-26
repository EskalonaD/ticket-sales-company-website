import { Component, OnInit } from '@angular/core';

import { RETURNTICKETS } from 'src/app/data/mock-ReturnTickets';
import { TicketReturn } from 'src/app/data/TicketReturn';
import { SearchService } from 'src/app/main/search.service';


@Component({
  selector: 'app-return-trip',
  templateUrl: './return-trip.component.html',
  styleUrls: ['./return-trip.component.css']
})
export class ReturnTripComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  tickets: TicketReturn[] = RETURNTICKETS.filter(el => el.ticketTo.startAirport.name === this.searchService.newTripInfo.startP 
                                                    && el.ticketTo.endAirport.name === this.searchService.newTripInfo.endP
                                                    && el.ticketTo.startTime.valueOf() > this.searchService.newTripInfo.date.startDate.valueOf()
                                                    && el.ticketFrom.endTime.valueOf() < this.searchService.newTripInfo.date.endDate.valueOf()
                                                    && el.ticketFrom.availableTickets > this.searchService.newTripInfo.passengersAmount)

  ngOnInit() {
    console.log(this.tickets)
  }

}