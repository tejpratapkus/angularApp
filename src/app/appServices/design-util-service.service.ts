import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilServiceService {

  url = 'https://jsonplaceholder.typicode.com/users';
  //product = "Laptop";
  constructor(private http: HttpClient) { }

  messageAlert() {
    alert("message for alert");
  }

  product(): Observable<any> {
    return this.http.get(this.url);
  }

  /*  product = [
      {name:'Laptop', id: 101},
      {name:'Mobile', id: 102},
    ]*/

}
