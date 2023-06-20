import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public state = 'form';
  public PlayerName: string = '';
  public selectedColorPalette: string = 'normal';

  constructor() {}

  public onSubmitted(event: string) {
    this.state = 'game';
    if (typeof event === 'string') {
      this.PlayerName = event;
    }
  }
  public exitGameClicked() {
    this.state = 'form';
    console.log('exit');
  }
  public changeColorPalette(event: any): void {
    this.selectedColorPalette = event.target.value;
  }
}
