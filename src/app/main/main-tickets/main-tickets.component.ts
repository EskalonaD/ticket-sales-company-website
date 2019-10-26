import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
@Component({
  selector: 'app-main-tickets',
  templateUrl: './main-tickets.component.html',
  styleUrls: ['./main-tickets.component.css']
})

export class MainTicketsComponent {
  minValue1: number = 100;
  maxValue1: number = 400;
  minValue2: number = 1;
  maxValue2: number = 12;
  options1: Options = {
    floor: 0,
    ceil: 12000,
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
    ceil: 48,
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
