import { TicketMulti } from './TicketMulti';
import { FLYWAYS } from './mock-flyWays';


export const MULTITICKETS: TicketMulti[] = [
    {
        id: 1,
        flyWays: [
            {
                flyWay: FLYWAYS.find(el => el.id === 1),
                startTime: new Date('2019-11-25T13:45:00.000Z'),
                endTime:  new Date('2019-11-25T20:45:00.000Z'),
                nightsIn: 3,
            },
            {
                flyWay: FLYWAYS.find(el => el.id === 6),
                startTime: new Date('2019-11-28T15:45:00.000Z'),
                endTime: new Date('2019-11-28T18:15:00.000Z'),
            },
        ],
        price: 250,
        availableTickets: 15,
    },
    {
        id: 2,
        flyWays: [
            {
                flyWay: FLYWAYS.find(el => el.id === 1),
                startTime: new Date('2019-11-28T13:15:00.000Z'),
                endTime: new Date('2019-11-28T20:15:00.000Z'),
                nightsIn: 2,
            },
            {
                flyWay: FLYWAYS.find(el => el.id === 4),
                startTime: new Date('2019-11-30T20:15:00.000Z'),
                endTime: new Date('2019-12-02T01:35:00.000Z'),
                nightsIn: 4,
            },
            {
                flyWay: FLYWAYS.find(el => el.id === 2),
                startTime: new Date('2019-12-06T11:35:00.000Z'),
                endTime: new Date('2019-12-06T13:35:00.000Z'),
                nightsIn: 3,
            },
            {
                flyWay: FLYWAYS.find(el => el.id === 3),
                startTime: new Date('2019-12-09T13:35:00.000Z'),
                endTime: new Date('2019-12-06T16:05:00.000Z'),
            },
        ],
        price: 700,
        availableTickets: 3,
    }
]