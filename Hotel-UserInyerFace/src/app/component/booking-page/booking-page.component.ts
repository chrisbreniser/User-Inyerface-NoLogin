import { Component, OnInit } from '@angular/core';
import { Room } from 'model/room';
import { RoomService } from '../../service/booking-page/room.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {

  rooms : Room[] = null;

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.rooms = this.roomService.getRooms();
    console.log(this.rooms);
  }

}
