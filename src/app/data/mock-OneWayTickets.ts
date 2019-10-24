import { AIRPORTS } from './flightFrom';
import { TicketOneWay } from './TicketOneWay';

export const ONEWAYTICKETS: TicketOneWay[] = [
    {
        id: 1,
        direct: false,
        changeAirport: AIRPORTS.find(({ id }) => id === 4),
        price: 123,
        durationToChangeAirport: 2,
        durationFromChangeAirport: 2.5,
        durationTotal: '4h. 30 min',
        startTime: new Date(1568713500000),
        endTime: new Date(1568713500000 + 4.5 * 60 * 60 * 1000),
        startAirport: AIRPORTS.find(({ id }) => id === 2),
        endAirport: AIRPORTS.find(({ id }) => id === 3),

    },
    {
        id: 2,
        direct: true,
        price: 123,
        durationTotal: '5h. 30 min',
        startTime: new Date(1569059100000),
        endTime: new Date(1569059100000 + 5.5 * 60 * 60 * 1000),
        startAirport: AIRPORTS.find(({ id }) => id === 3),
        endAirport: AIRPORTS.find(({ id }) => id === 2),
    },
    {
        id: 3,
        direct: true,
        price: 123,
        durationTotal: '5h. 30 min',
        startTime: new Date(1569059100000),
        endTime: new Date(1569059100000 + 5.5 * 60 * 60 * 1000),
        startAirport: AIRPORTS.find(({ id }) => id === 3),
        endAirport: AIRPORTS.find(({ id }) => id === 2),
    },
    {
        id: 5,
        direct: true,
        price: 123,
        durationTotal: '5h. 30 min',
        startTime: new Date(1569059100000),
        endTime: new Date(1569059100000 + 5.5 * 60 * 60 * 1000),
        startAirport: AIRPORTS.find(({ id }) => id === 3),
        endAirport: AIRPORTS.find(({ id }) => id === 2),
    },
    {
        id: 4,
        direct: true,
        price: 123,
        durationTotal: '5h. 30 min',
        startTime: new Date(1569059100000),
        endTime: new Date(1569059100000 + 5.5 * 60 * 60 * 1000),
        startAirport: AIRPORTS.find(({ id }) => id === 3),
        endAirport: AIRPORTS.find(({ id }) => id === 2),
    }
]