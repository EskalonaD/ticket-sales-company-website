import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/main/search.service';
import { BookingService } from 'src/app/main/main-ticket-booking/booking.service';


@Component({
  selector: 'app-multi-trip',
  templateUrl: './multi-trip.component.html',
  styleUrls: ['./multi-trip.component.css']
})
export class MultiTripComponent implements OnInit {

  get tickets() {
    return this.searchService.calculateTickets();
  }

  constructor(private searchService: SearchService, private bookingService: BookingService) { }

  ngOnInit() {
  
  }

}
