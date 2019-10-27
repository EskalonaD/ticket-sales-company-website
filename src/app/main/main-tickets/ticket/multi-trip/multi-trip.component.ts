import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from 'src/app/main/search.service';


@Component({
  selector: 'app-multi-trip',
  templateUrl: './multi-trip.component.html',
  styleUrls: ['./multi-trip.component.css']
})
export class MultiTripComponent implements OnInit {

  // get tickets() {
  //   return this.searchService.calculateTickets();
  // }

  constructor(private searchService: SearchService) { }

  @Input() tickets: any[]



  ngOnInit() {
    console.log(this.tickets);
    // console.log(MULTITICKETS.filter(el => el.id === 2)[0].flyWays[1].flyWay.startAirport.name === this.searchService.newTripInfo.startP);
    // console.log(MULTITICKETS.filter(el => el.id === 2)[0].flyWays[MULTITICKETS.filter(el => el.id === 2)[0].flyWays.length - 1].flyWay.endAirport.name === this.searchService.newTripInfo.endP)
    // console.log(MULTITICKETS.filter(el => el.id === 2)[0].flyWays[1].startTime.valueOf() > this.searchService.newTripInfo.date.startDate.valueOf())

  }

  onSubmit(value) {
    console.log(value);

  }

}
