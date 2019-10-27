import {Airport} from './Airport';
import { flyWay } from './flyWay';


export interface TicketOneWay {
    id: number;
    direct: boolean;
    flyWay1: flyWay;
    flyWay2?: flyWay;
    durationTotal: number;
    startTime: Date;
    endTime: Date;
    startAirport: Airport;
    endAirport: Airport;
    price: number;
    availableTickets: number;
}
