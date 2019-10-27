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
        availableTickets: 25,
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
        availableTickets: 27,

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
        availableTickets: 15,
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
        availableTickets: 5,

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
        availableTickets: 25,

    },
    {
        id: 5,
        direct: false,
        flyWay1: FLYWAYS.find(({id}) => id === 2),
        flyWay2: FLYWAYS.find(({id}) => id === 3),
        price: 123,
        durationTotal: 4.5,
        startTime: new Date('2019-10-10T18:45:00'),
        endTime: new Date('2019-10-10T23:15:00'),
        startAirport: AIRPORTS.find(({ id }) => id === 2),
        endAirport: AIRPORTS.find(({ id }) => id === 3),
        availableTickets: 25,
    },
    {
        id: 6,
        direct: true,
        price: 73,
        flyWay1: FLYWAYS.find(el => el.id === 4),
        durationTotal: 5.5,
        startTime: new Date("2019-10-15T12:00:00"),
        endTime: new Date("2019-10-15T17:30:00"),
        startAirport: AIRPORTS.find(({ id }) => id === 3),
        endAirport: AIRPORTS.find(({ id }) => id === 2),
        availableTickets: 3,

    },
    {
        id: 7,
        direct: true,
        price: 173,
        flyWay1: FLYWAYS.find(el => el.id === 4),
        durationTotal: 5.5,
        startTime: new Date("2019-10-27T12:25:00"),
        endTime: new Date("2019-10-27T17:55:00"),
        startAirport: AIRPORTS.find(({ id }) => id === 3),
        endAirport: AIRPORTS.find(({ id }) => id === 2),
        availableTickets: 15,
    },
    {
        id: 8,
        direct: true,
        price: 53,
        flyWay1: FLYWAYS.find(el => el.id === 4),
        durationTotal: 5.5,
        startTime: new Date("2019-11-10T11:00:00"),
        endTime: new Date("2019-11-10T16:30:00"),
        startAirport: AIRPORTS.find(({ id }) => id === 3),
        endAirport: AIRPORTS.find(({ id }) => id === 2),
        availableTickets: 5,

    },
    {
        id: 9,
        direct: true,
        price: 101,
        flyWay1: FLYWAYS.find(el => el.id === 4),
        durationTotal: 5.5,
        startTime: new Date("2019-11-25T11:00:00"),
        endTime: new Date("2019-11-25T16:30:00"),
        startAirport: AIRPORTS.find(({ id }) => id === 3),
        endAirport: AIRPORTS.find(({ id }) => id === 2),
        availableTickets: 25,

    }
]
