import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  banners: any[] = [];
  rooms: any[] = [];
  isLoading= true;
  dummy=Array(10);
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
      this.banners = [
        { banner: 'assets/rooms-images/room1.jpg' },
        { banner: 'assets/rooms-images/room2.jpg' },
        { banner: 'assets/rooms-images/room3.jpg' },
      ];
      this.rooms = [
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
      this.isLoading = false;
    }, );
  }
}
