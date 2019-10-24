import { Airport } from './../../data/airports.module';
import { SearchService } from './search.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
    departure: new FormControl(''),
    arrival: new FormControl(''),
    date: new FormControl(),
    passengers: new FormControl('')
  })

  @ViewChild('oneWay', { static: false }) oneWay: ElementRef;
  @ViewChild('twoWay', { static: false }) twoWay: ElementRef;
  @ViewChild('multiTrip', { static: false }) multiTrip: ElementRef;

  results: Airport[];
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
    this.searchService.onAddNewTripInfo(this.dataGroup.value)
  }

  onNavigate() {
    const one = this.oneWay.nativeElement.checked;
    const two = this.twoWay.nativeElement.checked;
    const multi = this.multiTrip.nativeElement.checked;


    this.router.navigate(['tickets'], { relativeTo: this.route, queryParams: { TwoWay: two, OneWay: one, MultiTrip: multi } })
  }


  count: number=1;
  increase() : void {
      this.count++;
  }

  decrease() : boolean {
    if (this.count < 2) {
      return false;
    }
    this.count--;
  }


 

condition: boolean=true;
      toggle(){
        this.condition=!this.condition;
    }

}
