import { Component } from '@angular/core';

export interface Player {
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public state = 'form';
  public exit = true;
  public PlayerName: Array<Player> = [];

  constructor() {}

  public addPlayerName(data: Player) {
    this.PlayerName.push({
      name: data.name,
    });
  }
  public onSubmitted(event: any) {
    this.state = 'game';
  }
  public exitGameClicked() {
    this.exit = false;
    console.log('exit');
  }
}
