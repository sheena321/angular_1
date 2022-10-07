import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }
  gettoken(){
    return !! localStorage.getItem("sessionUser");
  }
}
