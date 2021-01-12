import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { BookingPageComponent } from './component/booking-page/booking-page.component';
import { CheckoutPageComponent } from './component/checkout-page/checkout-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    BookingPageComponent,
    CheckoutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }