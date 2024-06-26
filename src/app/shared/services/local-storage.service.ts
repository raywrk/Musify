import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private ls = window.localStorage;
  constructor() { }

  public setItem(key, value){
    value = JSON.stringify(value)
    this.ls.setItem(key, value)
    return true;
  }

  public removeItem(key){
    this.ls.removeItem(key)
    return true;
  }

  public getItem(key){
    let value = this.ls.getItem(key);
    try{
      return JSON.parse(value);
    } catch(e){
      return null;
    }
  }


}
