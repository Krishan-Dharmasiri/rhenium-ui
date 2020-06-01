import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  sideBarOpened : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  OnSideBarToggled(){
    this.sideBarOpened = !this.sideBarOpened;
  }

}
