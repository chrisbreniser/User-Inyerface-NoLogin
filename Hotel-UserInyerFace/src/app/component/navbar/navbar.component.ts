import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  notMenu = {
  
      name: 'Hotel UserInyerface',
      routerLink: '/home'
    
  }
  menuList = [
    {
      name: 'Create Booking',
      routerLink: '/newBooking'
    },
    {
      name: 'My Booking',
      routerLink: '/myBooking'
    },
    {
      name: 'Checkout',
      routerLink: '/checkout'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
