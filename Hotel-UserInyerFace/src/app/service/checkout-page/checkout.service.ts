import { Injectable } from '@angular/core';
import { Room } from 'model/room';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  checkoutRoom: Room;

  constructor() { }

  setCheckoutRoom(room: Room){
      this.checkoutRoom = room;
  }

  getCheckoutRoom(): Room{
    return this.checkoutRoom;
  }

  clearCheckoutRoom(): void {
    this.checkoutRoom = null;
  }
}
