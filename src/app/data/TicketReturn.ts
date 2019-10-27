import { TicketOneWay } from './TicketOneway';

export interface TicketReturn {
    ticketTo: TicketOneWay;
    ticketFrom: TicketOneWay;
    durationTotal: number;
    price: number;
    id: number;
    nightsIn: number;
    availableTickets: number;
}
