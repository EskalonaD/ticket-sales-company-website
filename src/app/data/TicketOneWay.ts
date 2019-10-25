import {Airport} from './Airport';
import { flyWay } from './flyWay';


export interface TicketOneWay {
    id: number;
    direct: boolean;
    price: number;
    flyWay1: flyWay;
    flyWay2?: flyWay;
    durationTotal: string;
    startTime: Date;
    endTime: Date;
    startAirport: Airport;
    endAirport: Airport;
}