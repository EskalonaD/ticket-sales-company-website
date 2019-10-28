import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RegistrationService, RegisterResponseData } from './registration.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  isLogin = true;
  error: string = null;
  state: boolean = true;


  constructor(private registrationService: RegistrationService, private router: Router) { }
  ngOnInit() {
  }

  onSwitchModel() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password

    let authObs: Observable<RegisterResponseData>;

    if (this.isLogin) {
      authObs = this.registrationService.login(email, password);
    } else {
      authObs = this.registrationService.signup(email, password);
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.router.navigate(['../flights/gallery'])
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;

      }
    )

    form.reset();
  }

  changeState() {

  }



}
