import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /**
   * Current displayed value
   */
  currentValue = "0";

  constructor() {}

  clear() {
    this.currentValue = "0";
  }

  add(number: number) {
    this.currentValue = `${this.currentValue}${number}`;
  }
}
