import { MainGalleryService } from './main-gallery.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-gallery',
  templateUrl: './main-gallery.component.html',
  styleUrls: ['./main-gallery.component.css'],
  providers: [MainGalleryService]
})
export class MainGalleryComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

}
