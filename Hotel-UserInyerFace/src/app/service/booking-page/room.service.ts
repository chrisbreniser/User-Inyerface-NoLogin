import { Injectable } from '@angular/core';
import { Room, RoomType } from 'model/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private rooms : Room[] = [{
    desc : 'A room that is good',
    photo : 'assets/photos/room2.jpg',
    beds : 2,
    cost : 400,
    roomNumber : 2,
    service : true,
    type : RoomType.Suite
  },
  {
    desc : 'A room that is bad',
    photo : 'assets/photos/room404.jpg',
    beds : 1,
    cost : 800,
    roomNumber : 404,
    service : false,
    type : RoomType.Basic
  },
  {
    desc : 'A room that is okey',
    photo : 'assets/photos/room404.jpg',
    beds : 1,
    cost : 500,
    roomNumber : 500,
    service : true,
    type : RoomType.ExecutiveSuite
  }]

  constructor() { }

  /** GET rooms from local database */
  getRooms(): Room[] {
    return this.rooms;
  }
}
