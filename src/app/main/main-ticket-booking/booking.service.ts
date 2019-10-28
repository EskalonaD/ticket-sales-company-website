import { Injectable } from '@angular/core';
import { Passenger } from './passenger';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  ticket: any;
  type: string;
  passengersAmount: number;
  passengers: Passenger[];
  constructor() { }

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
}
