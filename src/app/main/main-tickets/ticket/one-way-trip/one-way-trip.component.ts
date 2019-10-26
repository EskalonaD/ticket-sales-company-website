import { Component, OnInit } from '@angular/core';

import { ONEWAYTICKETS } from 'src/app/data/mock-OneWayTickets';
import { TicketOneWay } from 'src/app/data/TicketOneWay';
import { SearchService } from 'src/app/main/search.service';

@Component({
  selector: 'app-one-way-trip',
  templateUrl: './one-way-trip.component.html',
  styleUrls: ['./one-way-trip.component.css']
})
export class OneWayTripComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  tickets: TicketOneWay[] = ONEWAYTICKETS.filter(el => el.startAirport.name === this.searchService.newTripInfo.startP 
    && el.endAirport.name === this.searchService.newTripInfo.endP
    && el.startTime.valueOf() > this.searchService.newTripInfo.date.startDate.valueOf()
    && el.endTime.valueOf() < this.searchService.newTripInfo.date.endDate.valueOf()
    && el.availableTickets > this.searchService.newTripInfo.passengersAmount);

  ngOnInit() {
    console.log(this.tickets)
  }

}
