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

    constructor() { }


    onSearch(queryString: string): Airport[] {
        return this.AIRPORTS.filter((airport) => {
            if (queryString != "") {
                return airport.city.toLowerCase().includes(queryString.toLowerCase())
            }
        }).slice()
    }


    onSearchFlights(data: TripInfo, passengersAmount: number) {
        console.log(data)
        // if(data)
        this.newTripInfo = data;
        this.newTripInfo.passengersAmount = passengersAmount;

    }

    calculateTickets() {
        console.log(this.newTripInfo);

        return this.newTripInfo.typeOfFlight === 'twoWay' ?
            RETURNTICKETS.filter(el => el.ticketFrom.availableTickets >= this.newTripInfo.passengersAmount
                && (this.newTripInfo.startP !== null || el.ticketTo.startAirport.name === this.newTripInfo.startP)
                && (this.newTripInfo.endP !== null || el.ticketTo.endAirport.name === this.newTripInfo.endP)
                && (this.newTripInfo.date.startDate === null || el.ticketTo.startTime.valueOf() > this.newTripInfo.date.startDate.valueOf())
                && (this.newTripInfo.date.endDate === null || el.ticketFrom.endTime.valueOf() < this.newTripInfo.date.endDate.valueOf()))
            : this.newTripInfo.typeOfFlight === 'oneWay' ?
                ONEWAYTICKETS.filter(el => el.availableTickets > this.newTripInfo.passengersAmount
                    && (this.newTripInfo.startP !== null || el.startAirport.name === this.newTripInfo.startP)
                    && (this.newTripInfo.endP !== null || el.endAirport.name === this.newTripInfo.endP)
                    && (this.newTripInfo.date.startDate === null || el.startTime.valueOf() > this.newTripInfo.date.startDate.valueOf())
                    && (this.newTripInfo.date.endDate === null || el.endTime.valueOf() < this.newTripInfo.date.endDate.valueOf()))
                : MULTITICKETS.filter(el => el.availableTickets > this.newTripInfo.passengersAmount
                    && (this.newTripInfo.startP === null || el.flyWays[0].flyWay.startAirport.name === this.newTripInfo.startP)
                    && (this.newTripInfo.endP === null || el.flyWays[el.flyWays.length - 1].flyWay.endAirport.name === this.newTripInfo.endP)
                    && (this.newTripInfo.date.startDate === null || el.flyWays[0].startTime.valueOf() > this.newTripInfo.date.startDate.valueOf())
                    && (this.newTripInfo.date.endDate === null || el.flyWays[el.flyWays.length - 1].endTime.valueOf() < this.newTripInfo.date.endDate.valueOf()))
    }

}
