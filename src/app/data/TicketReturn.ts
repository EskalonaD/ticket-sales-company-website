import { TicketOneWay } from './TicketOneway';

export interface TicketReturn {
    flightTo: TicketOneWay;
    flightFrom: TicketOneWay;
    totalDuration: number;
    price: number;
}