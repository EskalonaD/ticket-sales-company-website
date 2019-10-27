import { AIRPORTS } from './flightFrom';
import { TicketOneWay } from './TicketOneWay';
import { FLYWAYS } from './mock-flyWays';


export const ONEWAYTICKETS: TicketOneWay[] = [
    {
        id: 1,
        direct: false,
        flyWay1: FLYWAYS.find(({ id }) => id === 2),
        flyWay2: FLYWAYS.find(({ id }) => id === 3),
        price: 123,
        durationTotal: 4.5,
        startTime: new Date(1568713500000),
        endTime: new Date(1568713500000 + 4.5 * 60 * 60 * 1000),
        startAirport: AIRPORTS.find(({ id }) => id === 2),
        endAirport: AIRPORTS.find(({ id }) => id === 3),

    },
    {
        id: 2,
        direct: true,
        price: 73,
        flyWay1: FLYWAYS.find(el => el.id === 4),
        durationTotal: 5.5,
        startTime: new Date(1569059100000),
        endTime: new Date(1569059100000 + 5.5 * 60 * 60 * 1000),
        startAirport: AIRPORTS.find(({ id }) => id === 3),
        endAirport: AIRPORTS.find(({ id }) => id === 2),
    },
    {
        id: 3,
        direct: true,
        price: 173,
        flyWay1: FLYWAYS.find(el => el.id === 4),
        durationTotal: 5.5,
        startTime: new Date(1569059100000),
        endTime: new Date(1569059100000 + 5.5 * 60 * 60 * 1000),
        startAirport: AIRPORTS.find(({ id }) => id === 3),
        endAirport: AIRPORTS.find(({ id }) => id === 2),
    },
    {
        id: 5,
        direct: true,
        price: 53,
        flyWay1: FLYWAYS.find(el => el.id === 4),
        durationTotal: 5.5,
        startTime: new Date(1569059100000),
        endTime: new Date(1569059100000 + 5.5 * 60 * 60 * 1000),
        startAirport: AIRPORTS.find(({ id }) => id === 3),
        endAirport: AIRPORTS.find(({ id }) => id === 2),
    },
    {
        id: 4,
        direct: true,
        price: 101,
        flyWay1: FLYWAYS.find(el => el.id === 4),
        durationTotal: 5.5,
        startTime: new Date(1569059100000),
        endTime: new Date(1569059100000 + 5.5 * 60 * 60 * 1000),
        startAirport: AIRPORTS.find(({ id }) => id === 3),
        endAirport: AIRPORTS.find(({ id }) => id === 2),
    }
]