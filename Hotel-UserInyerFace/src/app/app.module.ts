import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import{ ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { BookingPageComponent } from './component/booking-page/booking-page.component';
import { CheckoutPageComponent } from './component/checkout-page/checkout-page.component';
import { AppRoutingModule } from './app-routing.module';
import { MyBookingComponent } from './component/my-booking/my-booking.component';
import { RoomSelectComponent } from './component/booking-page/room-select/room-select.component';
import { PopOutComponent } from './component/booking-page/pop-out/pop-out.component';
import { PopOutsComponent } from './component/landing-page/pop-out/pop-out.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    BookingPageComponent,
    CheckoutPageComponent,
    MyBookingComponent,
    RoomSelectComponent,
    PopOutComponent,
    PopOutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
