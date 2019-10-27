import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  focusInput: string;

  ngOnInit() {
  }

  cardInfo = this.fb.group({
    number: ['',
      Validators.compose([
        Validators.required,
        Validators.pattern("[0-9]{16}"),
        Validators.minLength(16)])],
    expiry: ['',
      Validators.compose([
        Validators.required,
        Validators.pattern("^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$")
        ])],
    cvv: ['',
      Validators.compose([
        Validators.required,
        Validators.pattern("[0-9]{3}"),
        Validators.minLength(3)])],
    owner: ['', Validators.required],
    agreement: [false, Validators.requiredTrue]
  });

  onSubmit() {
    console.log(this.cardInfo.value);
  }

  onFocus(cardPart: string) {
    this.focusInput = cardPart;
  }

  onBlur() {
    this.focusInput = '';
  }

  onPaste(event) {
    event.preventDefault();
  }

  onMaxLength(event, maxLength: string) {
    if (event.target.value.length >= maxLength) {
      event.preventDefault();
    }
  }

  onNANInput(event) {
    if (event.key.match(/[^0-9]/)) {
      event.preventDefault();
    }
  }

  onDateKeyPress(event) {
    if (event.target.value.length === 2) {
      event.target.value += '/';
    }
  }
}
