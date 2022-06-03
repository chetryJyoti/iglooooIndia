import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.page.html',
  styleUrls: ['./room-detail.page.scss'],
})
export class RoomDetailPage implements OnInit {
  id: any;
  roomData: any = {};
  savedRooms: any = {};
  allRooms: any[] = [
    {
      roomId: 'r1',
      agentId: 'a1',
      cityId: 1,
      locationId: '1',
      roomName: 'Gopals pg',
      cityName: 'guwahati',
      locationName: 'beltola Guwahati',
      availability: false,
      availableRooms: 10,
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
      availableRooms: 3,
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
      availableRooms: 1,
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
  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      console.log('RoomId', paramMap);
      if (!paramMap.has('roomId')) {
        this.navCtrl.back();
        return;
      }
      this.id = paramMap.get('roomId');
      console.log('id:', this.id);
      this.getRoomsData();
    });
  }
  // getting all th rooms details which matches the passed roomId
  getRoomsData() {
    this.roomData = {};
    const roomData: any = this.allRooms.filter((x) => x.roomId === this.id);
    this.roomData = roomData[0];
    this.savedRooms = this.roomData;
    console.log('RoomData:', this.roomData);
  }
  saveToSaved() {
    Storage.set({
      key: 'SavedRooms',
      value: JSON.stringify(this.savedRooms),
    });
  }
  // for booking a room
  makePayment() {
    try {
      const bookingData = {
        roomId: this.roomData.roomId,
        roomDetails: this.roomData,
        amountPaid: this.roomData.price,
        paid: 'online',
      };
      console.log('bookingPlaced:', bookingData);
    } catch (e) {
      console.log(e);
    }
  }
}
