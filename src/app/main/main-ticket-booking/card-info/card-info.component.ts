import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  cardInfo = this.fb.group({
    number: ['', Validators.required],
    expiry: ['', Validators.required],
    cvv: ['', Validators.required],
    owner: ['', Validators.required],
    agreement: [false, Validators.requiredTrue]
  });

  onSubmit() {
    console.log(this.cardInfo.value);
  }
}
