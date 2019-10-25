import { TicketOneWay } from './TicketOneway';

export interface TicketReturn {
    ticketTo: TicketOneWay;
    ticketFrom: TicketOneWay;
    maxDuration: number;
    price: number;
    id: number;
    nightsIn: number;
}