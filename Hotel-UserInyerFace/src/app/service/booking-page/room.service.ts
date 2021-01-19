import { Injectable } from '@angular/core';
import { Room, RoomType } from 'model/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private rooms : Room[] = [{
    roomNumber : 102,
    desc : 'A room that is good',
    photo : 'assets/photos/room2.jpg',
    beds : 2,
    cost : 400,
    service : true,
    type : RoomType.ExecutiveSuite
  },
  {
    roomNumber : 404,
    desc : 'A room that is bad',
    photo : 'assets/photos/room404.jpg',
    beds : 1,
    cost : 800,
    service : false,
    type : RoomType.Basic
  },
  {
    roomNumber : 500,
    desc : 'A room that is okey',
    photo : 'assets/photos/room500.webp',
    beds : 1,
    cost : 500,
    service : true,
    type : RoomType.Basic
  },
  {
    roomNumber : 505,
    desc : 'A room that is not okay',
    photo : 'assets/photos/room505.webp',
    beds : 2,
    cost : 500,
    service : true,
    type : RoomType.Basic
  }]

  constructor() { }

  /** GET rooms from local database */
  getRooms(): Room[] {
    return this.rooms;
  }

  /** DELETE room from local database using entire object */
  removeRoom(room : Room) {
    const index = this.rooms.indexOf(room, 0);
    if (index > -1) {
      this.rooms.splice(index, 1);
    }
  }

}
