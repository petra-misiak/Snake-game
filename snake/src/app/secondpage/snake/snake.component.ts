import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss'],
})
export class SnakeComponent implements OnInit {
  public seconds: number = 0;
  public points: number = 0;
  public interval: any;
  public status: any;

  @Input() public data: string = ' ';
  @Output() exit = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  public startTimer() {
    this.interval = setInterval(() => {
      if (this.seconds === 0) {
        this.seconds++;
      } else {
        this.seconds++;
      }
    }, 1000);
    this.status = ['Started'];
  }

  public stopTimer() {
    clearInterval(this.interval);
    this.status = ['Stopped'];
  }

  public resetTimer() {
    this.seconds = 0;
    clearInterval(this.interval);
    this.status = ['Ready'];
    this.points = 0;
  }

  public gameOver() {
    clearInterval(this.interval);
    this.status = ['Game over'];
  }

  public coutingPoints() {
    this.points++;
  }

  public exitGame() {
    this.exit.emit();
  }
}
