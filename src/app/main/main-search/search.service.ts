import { Airport } from './../../data/airports.module';




export class SearchService {
    AIRPORTS: Airport[] = [
        { id: 1, name: 'IEV Kyiv, Igor Sikorsky International', city: 'Kyiv', shortName: 'Kyiv (IEV)', code: 'IEV' },
        { id: 2, name: 'KBP Kyiv, Borispil International Airport', city: 'Kyiv', shortName: 'Kyiv (KBP)', code: 'KBP' },
        { id: 3, name: 'Paris (CDG)', city: 'Paris', shortName: 'Paris (CDG)', code: 'CDG' },
        { id: 4, name: 'Warsaw (WAW)', city: 'Warsaw', shortName: 'Warsaw (WAW)', code: 'WAW' },
    ]

    newTripInfo: Object = {}

    constructor() { }



    onSearch(queryString: string): Airport[] {
        return this.AIRPORTS.filter((airport) => {
            if (queryString != "") {
                return airport.name.toLowerCase().includes(queryString.toLowerCase())
            }
        }).slice()
    }

    onAddNewTripInfo(data: Object) {
        this.newTripInfo = data;
        console.log(this.newTripInfo);
    }
}