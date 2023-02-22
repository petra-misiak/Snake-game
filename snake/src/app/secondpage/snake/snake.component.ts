import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss'],
})
export class SnakeComponent implements OnInit {
  // @Input() public player: string = '';
  @Output() exit = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
  public exitGame() {
    this.exit.emit(true);
  }
}
