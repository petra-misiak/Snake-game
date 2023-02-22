import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public state = 'form';
  public exit = true;

  // public player: string = '';
  public onSubmitted(event: any) {
    this.state = 'game';
  }
  public exitGameClicked(event: boolean) {
    this.exit = event;
    console.log('exit');
  }
}
