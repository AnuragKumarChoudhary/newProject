import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  first = true; second = false; third = false; fourth = false;

  ngOnInit() {
  }

  next() {
    this.first = false;
    this.second = true;
    this.third = false;
    this.fourth = false;
  }

  next1() {
    this.first = false;
    this.second = false;
    this.third = true;
    this.fourth = false;
  }

  next2() {
    this.first = false;
    this.second = false;
    this.third = false;
    this.fourth = true;
  }

  submit() {

  }

  previous() {
    this.first = true;
    this.second = false;
    this.third = false;
    this.fourth = false;
  }

  previous1() {
    this.first = false;
    this.second = true;
    this.third = false;
    this.fourth = false;
  }

  previous2() {
    this.first = false;
    this.second = false;
    this.third = true;
    this.fourth = false;
  }

}
