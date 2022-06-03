import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {

  @Input() rooms: any;
  constructor() {}

  ngOnInit() {}


}
