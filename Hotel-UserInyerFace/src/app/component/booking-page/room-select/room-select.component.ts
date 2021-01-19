import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'model/room';
import { CheckoutService } from 'src/app/service/checkout-page/checkout.service';
import { RoomService } from '../../../service/booking-page/room.service';

@Component({
  selector: 'app-room-select',
  templateUrl: './room-select.component.html',
  styleUrls: ['./room-select.component.css']
})
export class RoomSelectComponent implements OnInit {

  @Input() room : Room;

  constructor(
    private checkoutService: CheckoutService, 
    private roomService: RoomService) { }

  ngOnInit(): void {

  }

  addToCheckout(){
    this.checkoutService.setCheckoutRoom(this.room);
  }

  removeRoom(){
    this.roomService.removeRoom(this.room);
  }

}
