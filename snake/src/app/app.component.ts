import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public state = 'form';
  public PlayerName: string = '';

  constructor() {}

  public onSubmitted(event: any) {
    this.state = 'game';
    if (typeof event === 'string') {
      this.PlayerName = event;
    }
  }
  public exitGameClicked() {
    this.state = 'form';
    console.log('exit');
  }
}
