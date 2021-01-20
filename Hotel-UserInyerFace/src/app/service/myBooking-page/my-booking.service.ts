import { Injectable } from '@angular/core';
import { BookedRoom, Room } from 'model/room';

@Injectable({
  providedIn: 'root'
})
export class MyBookingService {

  myBookedRooms:BookedRoom[] = [];

  constructor() { }

  addBookedRoom(bookedRoom: BookedRoom){
      this.myBookedRooms.push(bookedRoom);
  }

  getBookedRooms(): BookedRoom[]{
    return this.myBookedRooms;
  }

}
