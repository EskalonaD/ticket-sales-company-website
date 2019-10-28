import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from 'src/app/main/search.service';
import { BookingService } from 'src/app/main/main-ticket-booking/booking.service';


@Component({
  selector: 'app-multi-trip',
  templateUrl: './multi-trip.component.html',
  styleUrls: ['./multi-trip.component.css']
})
export class MultiTripComponent implements OnInit {

  @Input() tickets: any[]

  constructor(private searchService: SearchService, private bookingService: BookingService) { }

  onClick(value): void {
    this.bookingService.ticket = value;
    this.bookingService.type = this.searchService.newTripInfo.typeOfFlight
  }

  ngOnInit() { }

}
