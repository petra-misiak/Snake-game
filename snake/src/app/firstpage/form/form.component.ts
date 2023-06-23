import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { FormData } from '../data/form-data';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerDataService } from 'src/app/player-data.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  originalformData: FormData = {
    name: '',
    token: '',
  };

  formData = { ...this.originalformData };
  public selectedColorPalette: string = 'normal';

  @Output() submit = new EventEmitter<string>();

  constructor(
    private _router: Router,
    private playerDataService: PlayerDataService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.selectedColorPalette = params['color'];
    });
  }

  openGame(form: NgForm) {
    this.playerDataService.setUserInfo(form.value.name);
    this._router.navigate(['/snake-game', this.selectedColorPalette]);
    form.resetForm();
  }
}
