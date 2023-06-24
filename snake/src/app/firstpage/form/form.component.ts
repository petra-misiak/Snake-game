import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  formData: FormGroup;

  public selectedColorPalette: string = 'normal';

  @Output() submit = new EventEmitter<string>();

  constructor(
    private _router: Router,
    private playerDataService: PlayerDataService,
    private _route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.formData = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      token: ['', Validators.required],
    });
  }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.selectedColorPalette = params['color'];
    });
  }

  openGame() {
    if (this.formData.valid) {
      const name = this.formData.value.name;
      this.playerDataService.setUserInfo(name);
      this._router.navigate(['/snake-game', this.selectedColorPalette]);
      this.formData.reset();
    }
  }
}
