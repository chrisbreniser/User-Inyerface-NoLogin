import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-outs',
  templateUrl: './pop-out.component.html',
  styleUrls: ['./pop-out.component.css']
})
export class PopOutsComponent implements OnInit {
  @Input() isShow: boolean;
  
  constructor() { }

  ngOnInit(): void {
    this.isShow = false;
  }

  toggleShow() {
    this.isShow = !this.isShow;
  }

}
