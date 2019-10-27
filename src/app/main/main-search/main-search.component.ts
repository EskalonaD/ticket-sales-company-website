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
    typeOfFlight: new FormControl('twoWay'),
    startP: new FormControl(),
    endP: new FormControl(),
    date: new FormControl(),
  })


  results: Airport[];
  maxDate = new Date();
  date: Date;
  currentDate = moment().format('LL');
  passengersAmount: number = 1;

  
  constructor(private searchService: SearchService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataGroup.get('startP').valueChanges
      .subscribe((queryField) => {
        this.results = this.searchService.onSearch(queryField)
      })

    this.dataGroup.get('endP').valueChanges
      .subscribe((queryField) => {
        this.results = this.searchService.onSearch(queryField)
      })
  }

  onSubmit() {
    this.searchService.onSearchFlights(this.dataGroup.value, this.passengersAmount)
  }

  onNavigate() {

    this.router.navigate(['tickets'], { relativeTo: this.route })
  }


  increase(): void {
    this.passengersAmount++;
  }

  decrease(): boolean {
    if (this.passengersAmount < 2) {
      return false;
    }
    this.passengersAmount--;
  }




  condition: boolean = true;
  toggle() {
    this.condition = !this.condition;
  }

}
