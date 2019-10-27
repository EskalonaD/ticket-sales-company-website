import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/main/search.service';



@Component({
  selector: 'app-one-way-trip',
  templateUrl: './one-way-trip.component.html',
  styleUrls: ['./one-way-trip.component.css']
})
export class OneWayTripComponent implements OnInit {
  get tickets() {
    return this.searchService.calculateTickets();
  }

  constructor( private searchService: SearchService) { }


  ngOnInit() {
    console.log(this.tickets)
  }

}
