import { Gallery } from './../../main-gallery.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-special-offer',
  templateUrl: './special-offer.component.html',
  styleUrls: ['./special-offer.component.css']
})
export class SpecialOfferComponent implements OnInit {
  @Input() offer: Gallery;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
