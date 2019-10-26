import { Component, OnInit } from '@angular/core';
import { TicketMulti } from 'src/app/data/TicketMulti';
import { MULTITICKETS } from 'src/app/data/mock-MultiTickets'
import { SearchService } from 'src/app/main/search.service';

@Component({
  selector: 'app-multi-trip',
  templateUrl: './multi-trip.component.html',
  styleUrls: ['./multi-trip.component.css']
})
export class MultiTripComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  tickets: TicketMulti[] = MULTITICKETS.filter(el => el.flyWays[0].flyWay.startAirport.name === this.searchService.newTripInfo.startP 
    && el.flyWays[el.flyWays.length - 1].flyWay.endAirport.name === this.searchService.newTripInfo.endP
    && el.flyWays[0].startTime.valueOf() > this.searchService.newTripInfo.date.startDate.valueOf()
    && el.flyWays[el.flyWays.length - 1].endTime.valueOf() < this.searchService.newTripInfo.date.endDate.valueOf()
    && el.availableTickets > this.searchService.newTripInfo.passengersAmount);


  ngOnInit() {
    // console.log(this.tickets);
    // console.log(MULTITICKETS.filter(el => el.id === 2)[0].flyWays[1].flyWay.startAirport.name === this.searchService.newTripInfo.startP);
    // console.log(MULTITICKETS.filter(el => el.id === 2)[0].flyWays[MULTITICKETS.filter(el => el.id === 2)[0].flyWays.length - 1].flyWay.endAirport.name === this.searchService.newTripInfo.endP)
    // console.log(MULTITICKETS.filter(el => el.id === 2)[0].flyWays[1].startTime.valueOf() > this.searchService.newTripInfo.date.startDate.valueOf())
  }

}