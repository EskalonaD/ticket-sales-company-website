import { TicketOneWay } from './TicketOneway';

export interface TicketReturn {
    flightTo: TicketOneWay;
    flightFrom: TicketOneWay;
    maxDuration: number;
    price: number;
}