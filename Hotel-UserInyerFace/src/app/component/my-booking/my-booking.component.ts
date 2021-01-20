import { Component, OnInit } from '@angular/core';
import { BookedRoom } from 'model/room';
import { MyBookingService } from 'src/app/service/myBooking-page/my-booking.service';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {

  bookedRooms:BookedRoom[];

  constructor(private myBookingService: MyBookingService) { }

  ngOnInit(): void {
    this.bookedRooms = this.myBookingService.getBookedRooms();
    console.log(this.bookedRooms);
  }

}
