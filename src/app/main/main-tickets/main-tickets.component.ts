
import { TicketReturn } from 'src/app/data/TicketReturn';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainTicketService } from './main-tickets.service';
import { Subscription } from 'rxjs';
import { Options, LabelType } from 'ng5-slider';
import { TicketOneWay } from 'src/app/data/TicketOneway';
import { TicketMulti } from 'src/app/data/TicketMulti';
@Component({
  selector: 'app-main-tickets',
  templateUrl: './main-tickets.component.html',
  styleUrls: ['./main-tickets.component.css']
})
export class MainTicketsComponent implements OnInit, OnDestroy {

  private ticketChangeSub: Subscription

  constructor(private ticketService: MainTicketService) { }

  tickets: any[];

  ngOnInit() {



    this.tickets = this.ticketService.tickets;
    this.ticketChangeSub = this.ticketService.ticketsChange.subscribe((tickets: TicketReturn[]) => {
      this.tickets = tickets;
    })
    this.minValue1 = Math.min.apply(Math, this.tickets.map(function (o) { return o.price; }));
    this.maxValue1 = Math.max.apply(Math, this.tickets.map(function (o) { return o.price; }));
    this.minValue2 = Math.min.apply(Math, this.tickets.map(function (o) { return o.durationTotal; }));
    this.maxValue2 = Math.max.apply(Math, this.tickets.map(function (o) { return o.durationTotal; }));
  }

  ngOnDestroy(): void {
    this.ticketChangeSub.unsubscribe()

  }


  rangeFilter(min: number, max: number, props: string) {
    this.ticketService.onRangeFilter(min, max, props);
  }
  minValue1: number;
  maxValue1: number;
  minValue2: number;
  maxValue2: number;
  ceilDuration: number;
  options1: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return ' $' + value;
        case LabelType.High:
          return ' $' + value;
        default:
          return '$' + value;
      }

    }
  };
  options2: Options = {
    floor: 0,
    ceil: 20,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + 'h.';
        case LabelType.High:
          return value + 'h.';
        default:
          return value + 'h.';
      }
    }
  };


}
