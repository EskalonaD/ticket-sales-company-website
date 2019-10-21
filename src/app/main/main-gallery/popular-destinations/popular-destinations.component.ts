import { MainGalleryService } from './../main-gallery.service';
import { Gallery } from './../main-gallery.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popular-destinations',
  templateUrl: './popular-destinations.component.html',
  styleUrls: ['./popular-destinations.component.css']
})
export class PopularDestinationsComponent implements OnInit {

  @Input() cards: Gallery[];

  constructor(private galleryService: MainGalleryService) { }

  ngOnInit() {
    this.cards = this.galleryService.getArray('popular');
  }

}
