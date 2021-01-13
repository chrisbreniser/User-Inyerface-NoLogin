import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'model/room';

@Component({
  selector: 'app-room-select',
  templateUrl: './room-select.component.html',
  styleUrls: ['./room-select.component.css']
})
export class RoomSelectComponent implements OnInit {

  @Input() room : Room;

  constructor() { }

  ngOnInit(): void {
  }

}
