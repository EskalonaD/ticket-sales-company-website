import { MULTITICKETS } from './../../data/mock-MultiTickets';
import { ONEWAYTICKETS } from './../../data/mock-OneWayTickets';
import { RETURNTICKETS } from './../../data/mock-ReturnTickets';
import { SearchService } from '../search.service';

import { TicketReturn } from 'src/app/data/TicketReturn';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

export class MainTicketService {

    // Flights: any = [
    //     { startP: 'IEV Kyiv, Igor Sikorsky International', endP: 'Paris (CDG)', price: 123, duration: 4, startTime: new Date(1568713500000), endTime: new Date(1568713500000 + 4.5 * 60 * 60 * 1000) },

    // ]

    ticketsChange = new Subject<any[]>();

    tickets: any[] = [];

    addTicketsArray(query) {

        this.tickets = query.typeOfFlight === 'twoWay' ?
            RETURNTICKETS.filter(el => el.ticketFrom.availableTickets >= query.passengersAmount
                && (query.startP === null || query.startP === '' || el.ticketTo.startAirport.name === query.startP)
                && (query.endP === null || query.endP === '' || el.ticketTo.endAirport.name === query.endP)
                && (query.date.startDate === null || el.ticketTo.startTime.valueOf() > query.date.startDate.valueOf())
                && (query.date.endDate === null || el.ticketFrom.endTime.valueOf() < query.date.endDate.valueOf()))
            : query.typeOfFlight === 'oneWay' ?
                ONEWAYTICKETS.filter(el => el.availableTickets > query.passengersAmount
                    && (query.startP === null || query.startP === '' || el.startAirport.name === query.startP)
                    && (query.endP === null || query.endP === '' || el.endAirport.name === query.endP)
                    && (query.date.startDate === null || el.startTime.valueOf() > query.date.startDate.valueOf())
                    && (query.date.endDate === null || el.endTime.valueOf() < query.date.endDate.valueOf()))
                : MULTITICKETS.filter(el => el.availableTickets > query.passengersAmount
                    && (query.startP === null || query.startP === '' || el.flyWays[0].flyWay.startAirport.name === query.startP)
                    && (query.endP === null || query.endP === '' || el.flyWays[el.flyWays.length - 1].flyWay.endAirport.name === query.endP)
                    && (query.date.startDate === null || el.flyWays[0].startTime.valueOf() > query.date.startDate.valueOf())
                    && (query.date.endDate === null || el.flyWays[el.flyWays.length - 1].endTime.valueOf() < query.date.endDate.valueOf()))

        this.ticketsChange.next(this.tickets)

    }

    getTickets() {
        return this.tickets.slice();
    }




    results: any[];
    minG: number;
    maxG: number;
    constructor() { }

    onRangeFilter(min: number, max: number, props: string) {
        if (!(this.maxG > max) && !(this.minG < min)) {

            this.results = this.tickets.filter((item) => {
                return min <= item[props] && item[props] <= max
            });
        }
        this.results = this.results.filter((item) => {
            return min <= item[props] && item[props] <= max
        });
        this.maxG = max
        this.minG = min
        this.ticketsChange.next(this.results)

    }





    // lol(item) {
    //     const inputStart = item["startP"] || "Kiev";
    //     const inputEnd = item["endP"] || "Paris";
    //     const allToDestination = this.Flights.filter(route => route["endP"] == inputEnd);
    //     const allFromLocation = this.Flights.filter(route => route["startP"] == inputStart);
    //     const allDirect = this.Flights.filter(
    //         route => route["startP"] == inputStart && route["endP"] == inputEnd
    //     );
    //     allFromLocation.forEach(routeFrom => {
    //         allToDestination.forEach(routeTo => {
    //             if (routeFrom["endP"] == routeTo["startP"]) {
    //                 this.results.push({
    //                     startP: inputStart,
    //                     endP: inputEnd,
    //                     transfer: routeFrom["endP"],
    //                     time: routeFrom['time'] + routeTo['time'],

    //                 });
    //             }
    //         });
    //     });

    //     this.results = this.results.concat(allDirect);
    //     console.log(this.results);
    // }

}