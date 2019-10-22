// import { TicketOneWay } from './TicketOneWay';
import { AIRPORTS } from './flightFrom';

export const ONEWAYTICKETS: TicketOneWay[] = [
    {
        id: 1,
        direct: false,
        changeAirport: AIRPORTS.find(({id}) => id === 4),
        price: 123,
        durationToChangeAirport: 2,
        durationFromChangeAirport: 2.5,
        durationTotal: 2 + 2.5,
        startTime: 1568667600000,
        endTime: 1569013200000,
        startAirport: AIRPORTS.find(({id}) => id === 2),
        endAirport: AIRPORTS.find(({id}) => id === 3),
    
    },
    {
        id: 2,
        direct: true,
        price: 123,
        durationTotal: 5.5,
        startTime: 1569013200000,
        endTime: 1569013200000,
        startAirport: AIRPORTS.find(({id}) => id === 3),
        endAirport: AIRPORTS.find(({id}) => id === 2),
    }
]