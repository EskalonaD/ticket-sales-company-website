import { MainGalleryService } from './../main-gallery.service';
import { Gallery } from './../main-gallery.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.css']
})
export class HelperComponent implements OnInit {
  @Input() helpers: Gallery[];

  constructor(private galleryService: MainGalleryService) { }

  ngOnInit() {
    this.helpers = this.galleryService.getArray('helper')
  }

}
