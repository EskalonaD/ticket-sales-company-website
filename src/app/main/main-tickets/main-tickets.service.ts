import { SearchService } from './../search.service';

import { TicketReturn } from 'src/app/data/TicketReturn';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MainTicketService {

    // Flights: any = [
    //     { startP: 'IEV Kyiv, Igor Sikorsky International', endP: 'Paris (CDG)', price: 123, duration: 4, startTime: new Date(1568713500000), endTime: new Date(1568713500000 + 4.5 * 60 * 60 * 1000) },

    // ]

    ticketsChange = new Subject<TicketReturn[]>();

    tickets: any[] = this.searchService.calculateTickets();


    results: any[] = [];
    constructor(private searchService: SearchService) { }

    onRangeFilter(min: number, max: number, props: string) {

        this.results = this.tickets.filter((item) => {

            return min <= item.price && item[props] <= max
        });

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