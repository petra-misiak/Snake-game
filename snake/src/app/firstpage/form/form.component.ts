import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { FormData } from '../data/form-data';

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

  @Output() submit = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    this.submit.emit('game');
    // console.log('in onSubmit', form.valid);
  }
}
