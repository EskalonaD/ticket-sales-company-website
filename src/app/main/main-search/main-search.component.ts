import { Airport } from './../../data/airports.module';
import { SearchService } from '../search.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css'],

})

export class MainSearchComponent implements OnInit {



  dataGroup: FormGroup = new FormGroup({
    typeOfFlight: new FormControl(''),
    startP: new FormControl(''),
    endP: new FormControl(''),
    date: new FormControl(),
    passengers: new FormControl('')
  })

  results: Airport[];
  count: number = 0;
  maxDate = new Date();
  date: Date;
  currentDate = moment().format('LL');


  constructor(private searchService: SearchService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataGroup.get('departure').valueChanges
      .subscribe((queryField) => {
        this.results = this.searchService.onSearch(queryField)
      })

    this.dataGroup.get('arrival').valueChanges
      .subscribe((queryField) => {
        this.results = this.searchService.onSearch(queryField)
      })
  }

  onSubmit() {
    this.searchService.onSearchFlights(this.dataGroup.value)
  }

  onNavigate() {

    this.router.navigate(['tickets'])
  }


  onKeyright(event: any) {
    this.count = this.count + 1;
  }

  onKeyleft(event: any) {
    this.count = this.count - 1;
  }

}
