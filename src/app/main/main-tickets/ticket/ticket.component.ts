
import { Component, OnInit, Input } from '@angular/core';

import { TicketReturn } from 'src/app/data/TicketReturn';




@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent implements OnInit {
  constructor() { }

  @Input() tickets: TicketReturn[]

  ngOnInit() {
    console.log(this.tickets);

  }



}
