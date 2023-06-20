import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerDataService } from 'src/app/player-data.service';
import { Renderer2 } from '@angular/core';

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
  public colorPalette: string = 'normal';

  @Input() public data: string = '  ';
  @Output() exit = new EventEmitter<any>();
  constructor(
    private _router: Router,
    private playerDataService: PlayerDataService,
    private _http: HttpClient,
    private _route: ActivatedRoute,
    private renderer: Renderer2
  ) {
    this._route.params.subscribe((params) => {
      this.selectedColorPalette = params['colors'];
    });
  }

  ngOnInit(): void {
    this.name = this.playerDataService.getUserInfo();
    this.load();
    this._route.queryParams.subscribe((params) => {
      this.colorPalette = params['palette'] || 'normal';
    });
  }

  public updateColorPalette(palette: string): void {
    this.colorPalette = palette;

    if (this.colorPalette === 'high-contrast') {
      this.renderer.addClass(document.body, 'high-contrast');
    } else {
      this.renderer.removeClass(document.body, 'high-contrast');
    }
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

  public changeColorPalette(event: any): void {
    const palette = event.target.value;
    this._router.navigate(['/snake-game'], {
      queryParams: { palette },
      relativeTo: this._route,
    });
  }

  returnLogin() {
    this._router.navigate(['/login']);
  }
}
// public changeColor(event: any): void {
//   const colors = event.target.value;
//   this._router.navigate(['/snake-game', colors], {
//     relativeTo: this._route,
//   });
// }
