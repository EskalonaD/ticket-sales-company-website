import { Injectable } from '@angular/core';

import { MainTicketService } from './main-tickets/main-tickets.service';
import { Airport } from '../data/airports.module';
import { AIRPORTS } from '../data/flightFrom';
import { TripInfo } from './TripInfo';


@Injectable()
export class SearchService {
    AIRPORTS: Airport[] = AIRPORTS;

    newTripInfo: TripInfo 

    constructor(private ticketBook: MainTicketService) { }


    onSearch(queryString: string): Airport[] {
        console.log('lol')
        return this.AIRPORTS.filter((airport) => {
            if (queryString != "") {
                return airport.city.toLowerCase().includes(queryString.toLowerCase())
            }
        }).slice()
    }


    onSearchFlights(data: TripInfo, passengersAmount: number) {
        console.log(data)
        this.newTripInfo = data;
        this.newTripInfo.passengersAmount = passengersAmount;

    }
}