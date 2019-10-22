import { TicketReturn } from './TicketReturn';
import { ONEWAYTICKETS } from './mock-OneWayTickets';

function calculateMaxDuration (a, b) {
    return Math.max(a.durationTotal, b.durationTotal);
}

export const RETURNTICKETS: TicketReturn[] = [
    {
        flightTo: ONEWAYTICKETS.find(({id}) => id === 2),
        flightFrom: ONEWAYTICKETS.find(({id}) => id === 1),
        maxDuration: calculateMaxDuration(ONEWAYTICKETS.find(({id}) => id === 1), ONEWAYTICKETS.find(({id}) => id === 2)),
        price: 123,
    }
]