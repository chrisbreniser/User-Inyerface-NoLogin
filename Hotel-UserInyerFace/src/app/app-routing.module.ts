import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { BookingPageComponent } from './component/booking-page/booking-page.component';
import { MyBookingComponent } from './component/my-booking/my-booking.component';
import { CheckoutPageComponent } from './component/checkout-page/checkout-page.component';


const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'newBooking', component: BookingPageComponent},
  { path: 'myBooking', component: MyBookingComponent },
  { path: 'checkout', component: CheckoutPageComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
