import { flyWay } from './flyWay';
import { AIRPORTS } from './flightFrom';


export const FLYWAYS: flyWay[] = [
    {
        id: 1,
        startAirport: AIRPORTS.find(({id}) => id === 1),
        endAirport: AIRPORTS.find(({id}) => id === 3),
        duration: 7,
    },
    {
        id: 2,
        startAirport: AIRPORTS.find(({id}) => id === 2),
        endAirport: AIRPORTS.find(({id}) => id === 4),
        duration: 2,
    },
    {
        id: 3,
        startAirport: AIRPORTS.find(({id}) => id === 4),
        endAirport: AIRPORTS.find(({id}) => id === 3),
        duration: 2.5,
    },
    {
        id: 4,
        startAirport: AIRPORTS.find(({id}) => id === 3),
        endAirport: AIRPORTS.find(({id}) => id === 2),
        duration: 5.5,
    },
    {
        id: 5,
        startAirport: AIRPORTS.find(({id}) => id === 1),
        endAirport: AIRPORTS.find(({id}) => id === 4),
        duration: 5,
    }
]