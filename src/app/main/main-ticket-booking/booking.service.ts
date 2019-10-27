import { Injectable } from '@angular/core';
import { Type } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  ticket: any;
  type: string;
  constructor() { }
}
