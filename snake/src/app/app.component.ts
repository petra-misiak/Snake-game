import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public state = 'form';
  public PlayerName: string = '';
  public selectedColorPalette: string = 'normal';

  constructor(private _router: Router, private _route: ActivatedRoute) {}

  ngOnInit() {
    this.selectedColorPalette = 'normal';
    this._router.navigate(['login', this.selectedColorPalette]);
  }

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
    this._router.navigate([
      '/' + this._router.url.split('/')[1],
      this.selectedColorPalette,
    ]);
  }
}
