import { Injectable } from '@angular/core';

import { MainTicketService } from './main-tickets/main-tickets.service';
import { Airport } from '../data/airports.module';
import { AIRPORTS } from '../data/flightFrom';


@Injectable()
export class SearchService {
    AIRPORTS: Airport[] = AIRPORTS;

    newTripInfo: Object = {}

    constructor(private ticketBook: MainTicketService) { }



    onSearch(queryString: string): Airport[] {
        console.log('lol')
        return this.AIRPORTS.filter((airport) => {
            if (queryString != "") {
                return airport.city.toLowerCase().includes(queryString.toLowerCase())
            }
        }).slice()
    }

    // onAddNewTripInfo(data: Object) {
    //     this.newTripInfo = data;
    //     console.log(this.newTripInfo);
    // }

    onSearchFlights(data: Object) {
        console.log(data)
        this.newTripInfo = data;

    }
}