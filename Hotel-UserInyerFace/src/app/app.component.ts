import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Hotel-UserInyerFace';
  isShown: boolean;

  ngOnInit(): void {
    this.isShown = false;
  }

  toggleShow(){
    this.isShown = !this.isShown;
  }
}
