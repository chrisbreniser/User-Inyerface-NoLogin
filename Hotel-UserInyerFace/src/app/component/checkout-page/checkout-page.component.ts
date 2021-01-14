import { Component, OnInit } from '@angular/core';
import { Room } from 'model/room';
import { CheckoutService } from 'src/app/service/checkout-page/checkout.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  room: Room;

  constructor(private checkOutService: CheckoutService) { }

  ngOnInit(): void {
      this.room = this.checkOutService.getCheckoutRoom();
      console.log(this.room);
  }

}
