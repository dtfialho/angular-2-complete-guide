import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'game-control-component',
  templateUrl: './game-control-component.component.html',
  styleUrls: ['./game-control-component.component.css']
})
export class GameControlComponentComponent implements OnInit {
  @Output() game = new EventEmitter<number>();
  number: number = 0;
  interval;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = window.setInterval(() => {
      this.game.emit(this.number + 1);
      this.number++;
    }, 1000)
  }

  onStopGame() {
    window.clearInterval(this.interval);
  }

}
