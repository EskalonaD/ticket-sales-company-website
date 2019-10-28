import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  modalType:string = 'ticketBooked'; //'ticketBooked' for booked modal, 'ticketSent' for sent to email modal

  constructor() { }

  ngOnInit() {
  }

  onCloseButton() {

  }
}
