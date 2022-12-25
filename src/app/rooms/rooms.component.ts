import { Component } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelName = 'Hotel California';
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    availableRooms: 0,
    bookedRooms: 5,
    totalRooms: 20
  };




  toggle() {
    this.hideRooms = !this.hideRooms;
  }


}
