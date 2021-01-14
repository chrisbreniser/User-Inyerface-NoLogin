import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'model/room';
import { CheckoutService } from 'src/app/service/checkout-page/checkout.service';

@Component({
  selector: 'app-room-select',
  templateUrl: './room-select.component.html',
  styleUrls: ['./room-select.component.css']
})
export class RoomSelectComponent implements OnInit {

  @Input() room : Room;


  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
   
  }

  addToCheckout(){
    this.checkoutService.setCheckoutRoom(this.room);
  }
}
