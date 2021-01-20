import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  routerLink = "/home";

  sound = new Howl({
    src: ['assets/photos/poggers.mp3']
  });

  constructor() { }

  ngOnInit(): void {
  }

}
