import { RegistrationService } from './../registration/registration.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, Subscribable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  condition = false;
  private userSub: Subscription;
  constructor(private registrationService: RegistrationService) { }


  ngOnInit() {
    this.userSub = this.registrationService.user.subscribe(user => {
      this.condition = !!user;
      console.log(this.condition);

    })
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe()

  }




}
