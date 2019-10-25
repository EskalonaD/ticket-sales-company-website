
import { TicketReturn } from 'src/app/data/TicketReturn';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainTicketService } from './main-tickets.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-tickets',
  templateUrl: './main-tickets.component.html',
  styleUrls: ['./main-tickets.component.css']
})
export class MainTicketsComponent implements OnInit, OnDestroy {

  private ticketChangeSub: Subscription

  constructor(private ticketService: MainTicketService) { }

  tickets: TicketReturn[];

  ngOnInit() {
    this.tickets = this.ticketService.tickets;
    this.ticketChangeSub = this.ticketService.ticketsChange.subscribe((tickets: TicketReturn[]) => {
      this.tickets = tickets;
    })
  }

  ngOnDestroy(): void {
    this.ticketChangeSub.unsubscribe()

  }


  rangeFilter(value: number, props: string) {
    this.ticketService.onRangeFilter(value, props);
  }

}
