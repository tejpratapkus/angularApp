import { Component, OnInit } from '@angular/core';
import { DesignUtilServiceService } from '../appServices/design-util-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  statusOnline:boolean = true;
  userName:String = "Tej";
  constructor(private _utilService:DesignUtilServiceService) { 
    this._utilService.userName.subscribe(uname => {
      this.userName = uname;
    })
  }

  ngOnInit(): void {
  }

  products = [
    { name: 'Laptop' },
    { name: 'Mobile' },
    { name: 'Camera' },
    { name: 'Charger' }
  ]

}
