import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerDataService } from 'src/app/player-data.service';
@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss'],
})
export class SnakeComponent implements OnInit {
  load() {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });
    return this._http
      .get('https://scores.chrum.it/snake', {
        headers,
      })
      .subscribe((response) => {
        console.log(response);
      });
  }

  public seconds: number = 0;
  public points: number = 0;
  public interval: any;
  public status: any;
  public name: string = '';

  @Input() public data: string = '  ';
  @Output() exit = new EventEmitter<any>();
  constructor(
    private _router: Router,
    private playerDataService: PlayerDataService,
    private _http: HttpClient
  ) {}

  ngOnInit(): void {
    this.name = this.playerDataService.getUserInfo();
  }

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
  returnLogin() {
    this._router.navigate(['/login']);
  }
}
