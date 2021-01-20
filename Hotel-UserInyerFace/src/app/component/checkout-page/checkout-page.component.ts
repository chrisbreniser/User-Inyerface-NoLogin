import { Component, OnInit } from '@angular/core';
import { BookedRoom, Room } from 'model/room';
import { CheckoutService } from 'src/app/service/checkout-page/checkout.service';
import { MyBookingService } from 'src/app/service/myBooking-page/my-booking.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  bookedRoom: BookedRoom;
  room: Room;

  checkoutForm = {} as FormGroup;

  constructor(private checkOutService: CheckoutService, private myBookingService: MyBookingService, private router: Router) { }

  ngOnInit(): void {
      this.room = this.checkOutService.getCheckoutRoom();
      
      this.checkoutForm = new FormGroup({
        in: new FormControl(
          '',
          [Validators.required]
        ),
        out: new FormControl(
          '',
          [Validators.required]
        ),
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
    this.bookedRoom.room = this.checkOutService.getCheckoutRoom();
    this.bookedRoom.checkIn = this.checkoutForm.controls.in.value;
    this.bookedRoom.checkOut = this.checkoutForm.controls.out.value;
    this.myBookingService.addBookedRoom(this.bookedRoom);
    this.router.navigate(['/myBooking']);
  }

}
