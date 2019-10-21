import { Gallery } from './../../main-gallery.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popular-card',
  templateUrl: './popular-card.component.html',
  styleUrls: ['./popular-card.component.css']
})
export class PopularCardComponent implements OnInit {
  @Input() card: Gallery;

  constructor() { }

  ngOnInit() {
  }

}
