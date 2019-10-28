import { Injectable } from '@angular/core';
import { Passenger } from './passenger';
import { SearchService } from '../search.service';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  ticket: any;
  type: string;
  passengersAmount: number;
  passengers: Passenger[];

  constructor(private searchService: SearchService) { }

  createPassengersArray(){
    return new Array(this.passengersAmount).fill(null).map((el, index) => ({
      id: index + 1,
      firstName: '',
      lastName: '',
      country: '',
      gender: '',
      birthDate: 0,
      ID: 0,
      idExpireTime: new Date(),
      luggage: false,
    }))
  }

  onClick(value): void {
    this.ticket = value;
    this.passengersAmount = this.searchService.newTripInfo.passengersAmount;
    this.passengers = this.createPassengersArray();
    this.type = this.searchService.newTripInfo.typeOfFlight;
  }
}
