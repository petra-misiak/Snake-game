import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
      .get<any>('https://scores.chrum.it/snake', {
        headers,
      })
      .subscribe((response) => {
        this.info = response
          .sort((a: any, b: any) => b.score - a.score)
          .slice(0, 10);
        console.log(response);
      });
  }

  public seconds: number = 0;
  public points: number[] = [];
  public snakePoints: number = 0;
  public interval: any;
  public status: any;
  public name: string = '';
  public info: any;
  public sorting: 'ASC' | 'DESC' = 'ASC';
  public selectedColorPalette: string = '';
  public allColors = ['lightgreen', 'green'];

  @Input() public data: string = '  ';
  @Output() exit = new EventEmitter<any>();
  constructor(
    private _router: Router,
    private playerDataService: PlayerDataService,
    private _http: HttpClient,
    private _route: ActivatedRoute
  ) {
    this._route.params.subscribe((params) => {
      this.selectedColorPalette = params['colors'];
    });
  }

  ngOnInit(): void {
    this.name = this.playerDataService.getUserInfo();
    this.load();
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
    this.points = [];
  }

  public gameOver() {
    clearInterval(this.interval);
    this.status = ['Game over'];
  }

  public coutingPoints() {
    this.snakePoints++;
  }
  public exitGame() {
    this.exit.emit();
  }

  public sortPoints() {
    if (this.sorting === 'ASC') {
      this.info.sort((a: any, b: any) => a.score - b.score);
    } else if (this.sorting === 'DESC') {
      this.info.sort((a: any, b: any) => b.score - a.score);
    }
  }

  public changeColor(event: any): void {
    const colors = event.target.value;
    this._router.navigate(['/snake-game', colors], {
      relativeTo: this._route,
    });
  }
  returnLogin() {
    this._router.navigate(['/login']);
  }
}
