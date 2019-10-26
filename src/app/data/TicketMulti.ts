import { flyWay } from './flyWay';

interface oneFlight {
    flyWay: flyWay;
    startTime: Date;
    endTime: Date;
    nightsIn?: number;
}

export interface TicketMulti {
    id: number;
    flyWays: oneFlight[]; 
    price: number;
}
