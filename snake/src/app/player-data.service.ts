import { Injectable } from '@angular/core';
// import { FormData } from './firstpage/data/form-data';

@Injectable({
  providedIn: 'root',
})
export class PlayerDataService {
  private _name: string = '';

  public setUserInfo(name: string) {
    this._name = name;
  }

  public getUserInfo() {
    return this._name;
  }

  constructor() {}
}
