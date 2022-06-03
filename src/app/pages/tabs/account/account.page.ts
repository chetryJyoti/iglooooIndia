import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  profile: any ={
    name:'chetry raj',
    phone:'600348754',
    email:'chetry@gmail.com'
  };
  bookings= [
    {
      roomId: 'r1',
      agentId: 'a1',
      cityId: 1,
      locationId: '1',
      roomName: 'Gopals pg',
      cityName: 'guwahati',
      locationName: 'beltola Guwahati',
      images: [
        'assets/rooms-images/room3.jpg',
        'assets/rooms-images/room2.jpg'
      ],
      price: 200000,
      forGender: 'boys',
      furnishingStatus: 'furnished',
      userId:'1'
    }
  ];
  constructor() {}

  ngOnInit() {}

  logout() {}
}
