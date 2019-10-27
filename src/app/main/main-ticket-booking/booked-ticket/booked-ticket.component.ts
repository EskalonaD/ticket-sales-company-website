import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booked-ticket',
  templateUrl: './booked-ticket.component.html',
  styleUrls: ['./booked-ticket.component.css']
})
export class BookedTicketComponent implements OnInit {

  ticket = this.bookingService.ticket;
  type: string = this.bookingService.type;
  constructor( private bookingService: BookingService) { }

  ngOnInit() {
    console.log(this.bookingService.ticket);
    console.log(this.bookingService.type)
  }
  
  

}
