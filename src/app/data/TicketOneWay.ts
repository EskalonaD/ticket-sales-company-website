import {Airport} from './Airport';

export interface TicketOneWay {
    id: number;
    direct: boolean;
    price: number;
    changeAirport?: Airport;
    durationToChangeAirport?: number,
    durationFromChangeAirport?: number;
    durationTotal: string;
    startTime: Date;
    endTime: Date;
    startAirport: Airport;
    endAirport: Airport;
}