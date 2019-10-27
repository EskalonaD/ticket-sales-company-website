import { Injectable } from '@angular/core';

import { MainTicketService } from './main-tickets/main-tickets.service';
import { Airport } from '../data/airports.module';
import { AIRPORTS } from '../data/flightFrom';
import { TripInfo } from './TripInfo';
import { RETURNTICKETS } from '../data/mock-ReturnTickets';
import { ONEWAYTICKETS } from '../data/mock-OneWayTickets';
import { MULTITICKETS } from '../data/mock-MultiTickets';
import * as moment from 'moment';



@Injectable()
export class SearchService {
    AIRPORTS: Airport[] = AIRPORTS;

    newTripInfo: TripInfo = {
        date: {
            startDate: moment("2019-01-01"),
            endDate: moment("2019-12-31"),
        },
        endP: null,
        startP: null,
        typeOfFlight: 'twoWay',
        passengersAmount: 1,
    }

    tickets: any[];

    constructor(private ticketService: MainTicketService) { }


    onSearch(queryString: string): Airport[] {
        return this.AIRPORTS.filter((airport) => {
            if (queryString != "") {
                return airport.city.toLowerCase().includes(queryString.toLowerCase())
            }
        }).slice()
    }


    onSearchFlights(data: TripInfo, passengersAmount: number) {
        this.newTripInfo = data;
        this.newTripInfo.passengersAmount = passengersAmount;

        this.ticketService.addTicketsArray(this.newTripInfo);
    }
}



