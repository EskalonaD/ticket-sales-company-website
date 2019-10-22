import {Airport} from './Airport';

export interface TicketOneWay {
    id: number;
    direct: boolean;
    price: number;
    changeAirport?: Airport;
    durationToChangeAirport?: number,
    durationFromChangeAirport?: number;
    durationTotal: number;
    startTime: number;
    endTime: number;
    startAirport: Airport;
    endAirport: Airport;
}