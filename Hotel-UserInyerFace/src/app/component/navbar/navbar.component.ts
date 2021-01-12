import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuList = [
    {
      name: 'Create Booking',
      routerLink: '/newBooking'
    },
    {
      name: 'My Booking',
      routerLink: '/myBooking'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
