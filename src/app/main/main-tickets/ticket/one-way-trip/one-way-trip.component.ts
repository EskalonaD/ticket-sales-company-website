import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from 'src/app/main/search.service';
import { BookingService } from 'src/app/main/main-ticket-booking/booking.service';



@Component({
  selector: 'app-one-way-trip',
  templateUrl: './one-way-trip.component.html',
  styleUrls: ['./one-way-trip.component.css']
})
export class OneWayTripComponent implements OnInit {

  @Input() tickets: any[]
  constructor(private searchService: SearchService, private bookingService: BookingService) { }


  ngOnInit() {
    console.log(this.tickets)
  }

}
