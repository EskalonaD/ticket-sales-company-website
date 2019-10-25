import { TicketMulti } from './TicketMulti';
import { FLYWAYS } from './mock-flyWays';


export const MULTITICKETS: TicketMulti[] = [
    {
        id: 1,
        ticket1: FLYWAYS.find(el => el.id === 1),
        startTime1: new Date('2019-11-25T13:45:00.000Z'),
        endTime1:  new Date('2019-11-25T20:45:00.000Z'),
        nightsIn1: 3,
        ticket2: FLYWAYS.find(el => el.id === 4),
        startTime2: new Date('2019-11-28T15:45:00.000Z'),
        endTime2: new Date('2019-11-28T18:15:00.000Z'),
        price: 250,
    },
    {
        id: 2,
        ticket1: FLYWAYS.find(el => el.id === 1),
        startTime1: new Date('2019-11-28T13:15:00.000Z'),
        endTime1: new Date('2019-11-28T20:15:00.000Z'),
        nightsIn1: 2,
        ticket2: FLYWAYS.find(el => el.id === 4),
        startTime2: new Date('2019-11-30T20:15:00.000Z'),
        endTime2: new Date('2019-12-02T01:35:00.000Z'),
        nightsIn2: 4,
        ticket3: FLYWAYS.find(el => el.id === 2),
        startTime3: new Date('2019-12-06T11:35:00.000Z'),
        endTime3: new Date('2019-12-06T13:35:00.000Z'),
        nightsIn3: 3,
        ticket4: FLYWAYS.find(el => el.id === 3),
        startTime4: new Date('2019-12-09T13:35:00.000Z'),
        endTime4: new Date('2019-12-06T16:05:00.000Z'),
        price: 700,
    }
]