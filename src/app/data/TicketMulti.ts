import { flyWay } from './flyWay';

export interface TicketMulti {
    id: number;
    ticket1: flyWay;
    startTime1: Date;
    endTime1: Date;
    nightsIn1: number;
    ticket2: flyWay;
    startTime2: Date;
    endTime2: Date;
    nightsIn2?: number;
    ticket3?: flyWay;
    startTime3?: Date;
    endTime3?: Date;
    nightsIn3?: number;
    ticket4?: flyWay;
    startTime4?: Date;
    endTime4?: Date;
    nightsIn4?: number;
    ticket5?: flyWay;
    startTime5?: Date;
    endTime5?: Date;
    price: number;
}