import { TicketReturn } from './TicketReturn';
import { ONEWAYTICKETS } from './mock-OneWayTickets';

function calculateTotalDuration () {
    return this.fligtTo.durationTotal + this.flightFrom.durationTotal
}

export const RETURNTICKETS: TicketReturn[] = [
    {
        flightTo: ONEWAYTICKETS.find(({id}) => id === 1),
        flightFrom: ONEWAYTICKETS.find(({id}) => id === 2),
        totalDuration: calculateTotalDuration(),
        price: 123,
    }
]