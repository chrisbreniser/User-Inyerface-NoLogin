import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Room } from 'model/room';

@Component({
  selector: 'app-pop-out',
  templateUrl: './pop-out.component.html',
  styleUrls: ['./pop-out.component.css']
})
export class PopOutComponent implements OnInit {

  @Input() room: Room;
  @Input() isShow: boolean;
  @Output() isShownEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.isShow = false;
  }

  toggleShow() {
    this.isShow = !this.isShow;
  }
}
