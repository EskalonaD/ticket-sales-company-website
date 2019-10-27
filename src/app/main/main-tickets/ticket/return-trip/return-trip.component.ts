import { Component, OnInit } from '@angular/core';

import { SearchService } from 'src/app/main/search.service';

@Component({
  selector: 'app-return-trip',
  templateUrl: './return-trip.component.html',
  styleUrls: ['./return-trip.component.css']
})
export class ReturnTripComponent implements OnInit {
  
  get tickets() {
    return this.searchService.calculateTickets();
  }

  constructor( private searchService: SearchService) { }


  ngOnInit() {
    console.log(this.tickets)
  }

}
