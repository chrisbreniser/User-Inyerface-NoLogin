import { Component, OnInit } from '@angular/core';
import { Room } from 'model/room';
import { CheckoutService } from 'src/app/service/checkout-page/checkout.service';
import { MyBookingService } from 'src/app/service/myBooking-page/my-booking.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  room: Room;

  checkoutForm = {} as FormGroup;

  constructor(private checkOutService: CheckoutService, private myBookingService: MyBookingService) { }

  ngOnInit(): void {
      this.room = this.checkOutService.getCheckoutRoom();
      
      this.checkoutForm = new FormGroup({
        ssn: new FormControl(
          '',
          [Validators.required]
        ),
        ccn: new FormControl(
          '',
          [Validators.required]
        ),
        exp: new FormControl(
          '',
          [Validators.required]
        ),
        cvc: new FormControl(
          '',
          [Validators.required]
        ),
        first: new FormControl(
          '',
          [Validators.required]
        ),
        last: new FormControl(
          '',
          [Validators.required]
        )
      });
  }

  public onSubmit() {
    this.myBookingService.addBookedRoom(this.room);
  }

}
