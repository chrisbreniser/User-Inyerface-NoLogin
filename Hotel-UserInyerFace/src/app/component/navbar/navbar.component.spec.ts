import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarComponent } from './navbar.component';
import { BookingPageComponent } from '../booking-page/booking-page.component';
import { Router } from '@angular/router';

TestBed.configureTestingModule({
  imports: [
    RouterTestingModule
  ]
})

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router: Router;
  let location: Location;

  router = TestBed.inject(Router);
  location = TestBed.inject(Location);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent, BookingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('navigate to the booking page /booking', fakeAsync(() => { 
    router.navigate(['booking']);
    tick();
    expect(location.pathname).toBe('/booking');
  }));

});
