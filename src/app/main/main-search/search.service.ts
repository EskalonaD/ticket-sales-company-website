import { Airport } from './../../data/airports.module';
import { ChangeDetectorRef, Component, ChangeDetectionStrategy } from '@angular/core';



@Component({
    changeDetection: ChangeDetectionStrategy.OnPush
})


export class SearchService {
    AIRPORTS: Airport[] = [
        { id: 1, name: 'IEV Kyiv, Igor Sikorsky International', city: 'Kyiv' },
        { id: 2, name: 'KBP Kyiv, Borispil International Airport', city: 'Kyiv' },
        { id: 3, name: 'Paris (CDG)', city: 'Paris' }
    ]

    constructor(private cdr: ChangeDetectorRef) { }



    onSearch(queryString: string): Airport[] {
        this.cdr.detectChanges()
        return this.AIRPORTS.filter((airport) => {
            if (queryString != "") {
                return airport.name.toLowerCase().includes(queryString.toLowerCase())
            }
        }).slice()
    }
}