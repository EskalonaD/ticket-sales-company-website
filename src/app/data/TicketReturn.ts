import { TicketOneWay } from './TicketOneway';

export interface TicketReturn {
    ticketTo: TicketOneWay;
    ticketFrom: TicketOneWay;
    maxDuration: string;
    price: number;
}