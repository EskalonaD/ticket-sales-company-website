import { Gallery } from './../main-gallery.model';
import { MainGalleryService } from './../main-gallery.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.css']
})
export class SpecialOffersComponent implements OnInit {
  @Input() offers: Gallery[];

  constructor(private galleryService: MainGalleryService) { }

  ngOnInit() {
    this.offers = this.galleryService.getArray('offer');
  }

}
