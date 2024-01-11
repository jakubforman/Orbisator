import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /**
   * Current displayed value
   */
  currentValue: string = "0";

  /**
   * Temporary value of currentValue
   * @private
   */
  private tmpValue: string = '';

  /**
   * Temporary action of action button
   *
   * TODO: přepracovat string na type nebo enum
   * @private
   */
  private tmpAction: string = '';

  constructor() {
  }

  /**
   * Clears the current value.
   *
   * @returns {void}
   */
  clear() {
    this.currentValue = "0";
  }

  /**
   * Adds a number to the currentValue.
   *
   * @param {number} number - The number to be added.
   */
  add(number: number) {
    if (this.currentValue === '0') {
      this.currentValue = `${number}`;
    } else {
      this.currentValue = `${this.currentValue}${number}`;
    }
  }

  /**
   * Toggles the sign of the current value.
   *
   * @return {void}
   */
  toggleSign() {
    if (!isNaN(Number(this.currentValue))) {
      this.currentValue = (Number(this.currentValue) * -1).toString()
    }
  }

  /**
   * Adds the current value to the temporary value and updates the current value.
   *
   * @return {void}
   */
  plus() {
    this.tmpAction = 'plus';

    if (this.tmpValue) {
      this.tmpValue =
        (Number(this.tmpValue) + Number(this.currentValue)).toString();

      this.currentValue = this.tmpValue;
    } else {
      this.tmpValue = this.currentValue;
    }
    this.currentValue = "0";
  }

  /**
   * Sets the currentValue to the tmpValue and clears the tmpValue.
   * If tmpAction is 'plus', calls the 'plus' method.
   *
   * @returns {void} - No return value.
   */
  equal() {
    if (this.tmpAction === 'plus') {
      this.plus();
    }

    this.currentValue = this.tmpValue;
    this.tmpValue = "";
  }
}
