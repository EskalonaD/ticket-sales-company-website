import { Airport } from './airports.module';

export interface flyWay {

    id: number;
    startAirport: Airport;
    endAirport: Airport;
    duration: number;


}