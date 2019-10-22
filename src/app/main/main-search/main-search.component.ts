import { Airport } from './../../data/airports.module';
import { SearchService } from './search.service';
import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css'],

})

export class MainSearchComponent implements OnInit {
  dataGroup: FormGroup = this.formBuilder.group({
    departure: new FormControl(''),
    arrival: new FormControl('')
  })
  value: string = '';
  results: Airport[];
  // queryField = new FormControl();

  // @ViewChild('departure', { static: false }) departure: ElementRef;
  // @ViewChild('arrival', { static: false }) arrival: ElementRef;


  constructor(private searchService: SearchService, private formBuilder: FormBuilder, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.dataGroup.valueChanges
      .subscribe((queryField) => {

        this.results = this.searchService.onSearch(queryField)
      })
  }

  onSubmit() {
    // const dep = this.departure.nativeElement.value;
    // const arr = this.arrival.nativeElement.value;
    // console.log(dep, arr)
    console.log(this.dataGroup.value)

  }


}
