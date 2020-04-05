import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilServiceService {

  constructor() { }

  messageAlert() {
    alert("message for alert");
  }
  
}
