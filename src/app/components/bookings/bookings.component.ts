import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {

  @Input() bookedRoom: any;
  constructor() { }

  ngOnInit() {}

}
