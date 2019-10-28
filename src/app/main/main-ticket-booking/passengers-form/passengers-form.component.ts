import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-passengers-form',
  templateUrl: './passengers-form.component.html',
  styleUrls: ['./passengers-form.component.css']
})
export class PassengersFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  passengerData = this.fb.group({
    name: this.fb.group({
      firstName: ['', Validators.required,],
      lastName: ['', Validators.required,]
    }),
    country: ['', Validators.required],
    gender: ['', Validators.required],
    birthDate: ['', Validators.required],
    passport: this.fb.group({
      id: ['', Validators.required],
      expiration: ['', Validators.required]
    }),
    luggage: []
  });

  get name() {
    return this.passengerData.get('name');
  }

  get country() {
    return this.passengerData.get('country');
  }

  get gender() {
    return this.passengerData.get('gender');
  }

  get birthDate() {
    return this.passengerData.get('birthDate');
  }

  get passport() {
    return this.passengerData.get('passport');
  }

  onSubmit() {
    console.log(this.passengerData.value);
  }
}
