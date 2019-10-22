import { TicketOneWay } from './TicketOneWay';

export const ONEWAYTICKETS: TicketOneWay[] = [
    {
        id: 1,
        direct: false,
        changeAirport: { id:4, name: 'Warsaw (WAW)', city: 'Warsaw'},
        price: 123,
        durationToChangeAirport: 2,
        durationFromChangeAirport: 2.5,
        durationTotal: 2 + 2.5,
        startTime: 1568667600000,
        endTime: 1569013200000,
        startAirport: { id: 2, name: 'KBP Kyiv, Borispil International Airport', city: 'Kyiv'},
        endAirport: { id: 3, name: 'Paris (CDG)', city: 'Paris'},
    
    },
    {
        id: 2,
        direct: true,
        price: 123,
        durationTotal: 5.5,
        startTime: 1569013200000,
        endTime: 1569013200000,
        startAirport: { id: 3, name: 'Paris (CDG)', city: 'Paris'},
        endAirport: { id: 2, name: 'KBP Kyiv, Borispil International Airport', city: 'Kyiv'},
    }
]