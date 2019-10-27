import { Moment } from 'moment';

export interface TripInfo {
    date: {
        endDate: Moment;
        startDate: Moment;
    },
    endP: string,
    startP: string,
    typeOfFlight: string,
    passengersAmount?: number,

}
