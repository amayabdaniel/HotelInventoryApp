import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hotelName = 'Hotel California';
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    availableRooms: 0,
    bookedRooms: 5,
    totalRooms: 20,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Single',
      amenities: 'TV, WiFi, Breakfast',
      price: 200,
      photos:
        'https://www.hotelcalifornia.com/wp-content/uploads/2019/03/Hotel-California-Exterior-1.jpg',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
    },
    {
      roomNumber: 2,
      roomType: 'Double',
      amenities: 'TV, WiFi, Breakfast, AC',
      price: 2000,
      photos:
        'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
    },
    {
      roomNumber: 3,
      roomType: 'Suite',
      amenities: 'TV, WiFi, Breakfast, AC, Shower',
      price: 5000,
      photos:
        'https://www.hotelcalifornia.com/wp-content/uploads/2019/03/Hotel-California-Exterior-1.jpg',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
    },
  ];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
