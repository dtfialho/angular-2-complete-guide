import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [];

  onStartGame(number: number) {
    this.numbers.push(number);
  }

  isOdd(number: number) {
    return number % 2 !== 0;
  }

  isEven(number: number) {
    return number % 2 === 0;
  }
}
