import { Injectable } from '@angular/core';
import { Room } from 'model/room';

@Injectable({
  providedIn: 'root'
})
export class MyBookingService {

  myRooms:Room[] = [];  

  constructor() { }

  addBookedRoom(room: Room){
      this.myRooms.push(room);
  }

  getBookedRooms(): Room[]{
    return this.myRooms;
  }

}
