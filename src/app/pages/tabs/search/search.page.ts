import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild('searchInput') sInput;
  model: any={
    icon:'search-outline',
    title:'NO ROOMS AVAILABLE FOR THIS LOCATION!!'
  };
  isLoading: boolean;
  query: any;
  allRooms: any[] =[
    {
      roomId: 'r1',
      agentId: 'a1',
      cityId: 1,
      locationId: '1',
      roomName: 'Gopals pg',
      cityName: 'guwahati',
      locationName: 'beltola Guwahati',
      availability: false,
      availableRooms:10,
      images: [
        'assets/rooms-images/room3.jpg',
        'assets/rooms-images/room2.jpg',
      ],
      price: 200000,
      forGender: 'boys',
      liveInAllowed: 'yes/no',
      independentRooms: 'yes/no',
      electricityCost: 'included in rent/not included',
      waterAvailability: 'form time to time/anytime',
      advancedToBePaid: 'amount',
      securityMoney: 'Amount',
      gateTiming: 'time',
      inTime: 'time',
      guestAllowedTill: 'canstay overnight/Time till',
      itemsProvidedByOwner: ['item1', 'item2', 'item3'],
      petsAllowed: 'yes/no',
      vibe: 'not so good/good/nice',
      externalNoise: 'low/medium/high',
      roomSoundPrivacy: 'yes/no',
      networkQuality: {
        insideRoom: 'good/bad',
        outsideRoom: 'good/bad',
      },
      furnishingStatus: 'furnished',
      amenties: [
        'bedrooms',
        'bathrooms',
        'parking',
        'floors',
        'gate security',
        'Free wifi',
        'furnishied',
        'power backup',
      ],
      aroundThisProperty: [
        'healthcare',
        'shooping',
        'banks',
        'parks',
        'cinemas',
        'bus stop',
      ],
      description: 'lorem10',
      ownerDetails: ['Name', 'Brief Description', 'Owners Occupation'],
    },


    {
      roomId: 'r2',
      agentId: 'a2',
      cityId: 1,
      locationId: '1',
      roomName: 'shiva pg',
      cityName: 'guwahati',
      locationName: 'ganeshguri Guwahati',
      availability: true,
      availableRooms:3,
      images: [
        'assets/rooms-images/room4.jpg',
        'assets/rooms-images/room2.jpg',
      ],
      price: 50000,
      forGender: 'boys',
      liveInAllowed: 'yes/no',
      independentRooms: 'yes/no',
      electricityCost: 'included in rent/not included',
      waterAvailability: 'form time to time/anytime',
      advancedToBePaid: 'amount',
      securityMoney: 'Amount',
      gateTiming: 'time',
      inTime: 'time',
      guestAllowedTill: 'canstay overnight/Time till',
      itemsProvidedByOwner: ['item1', 'item2', 'item3'],
      petsAllowed: 'yes/no',
      vibe: 'not so good/good/nice',
      externalNoise: 'low/medium/high',
      roomSoundPrivacy: 'yes/no',
      networkQuality: {
        insideRoom: 'good/bad',
        outsideRoom: 'good/bad',
      },
      furnishingStatus: 'furnished',
      amenties: [
        'bedrooms',
        'bathrooms',
        'parking',
        'floors',
        'gate security',
        'Free wifi',
        'furnishied',
        'power backup',
      ],
      aroundThisProperty: [
        'healthcare',
        'shooping',
        'banks',
        'parks',
        'cinemas',
        'bus stop',
      ],
      description: 'lorem10',
      ownerDetails: ['Name', 'Brief Description', 'Owners Occupation'],
    },

    {
      roomId: 'r3',
      agentId: 'a3',
      cityId: 1,
      locationId: '1',
      roomName: 'chetry pg',
      cityName: 'jorhat',
      locationName: 'jorhat,Assam',
      availability: true,
      availableRooms:1,
      images: [
        'assets/rooms-images/room2.jpg',
        'assets/rooms-images/room1.jpg',
      ],
      price: 87000,
      forGender: 'girls',
      liveInAllowed: 'yes/no',
      independentRooms: 'yes/no',
      electricityCost: 'included in rent/not included',
      waterAvailability: 'form time to time/anytime',
      advancedToBePaid: 'amount',
      securityMoney: 'Amount',
      gateTiming: 'time',
      inTime: 'time',
      guestAllowedTill: 'canstay overnight/Time till',
      itemsProvidedByOwner: ['item1', 'item2', 'item3'],
      petsAllowed: 'yes/no',
      vibe: 'not so good/good/nice',
      externalNoise: 'low/medium/high',
      roomSoundPrivacy: 'yes/no',
      networkQuality: {
        insideRoom: 'good/bad',
        outsideRoom: 'good/bad',
      },
      furnishingStatus: 'furnished',
      amenties: [
        'bedrooms',
        'bathrooms',
        'parking',
        'floors',
        'gate security',
        'Free wifi',
        'furnishied',
        'power backup',
      ],
      aroundThisProperty: [
        'healthcare',
        'shooping',
        'banks',
        'parks',
        'cinemas',
        'bus stop',
      ],
      description: 'lorem10',
      ownerDetails: ['Name', 'Brief Description', 'Owners Occupation'],
    },
  ];
  //  this array stores all the found rooms after filter function call
  rooms: any[] = [];

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.sInput.setFocus();
    }, 200);
  }
  // for searching the provided city
  async onSearchChange(event) {
    console.log(event.detail.value);
    this.query = event.detail.value.toLowerCase();
    this.rooms =[];
    if (this.query.length > 0) {
      this.isLoading = true;
      setTimeout(async () => {
        this.rooms = await this.allRooms.filter((element: any) =>
          element.cityName.includes(this.query)
        );
        console.log(this.rooms);
        this.isLoading = false;
      }, 2000);
    }
  }
}
