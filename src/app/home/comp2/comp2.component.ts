import { Component, OnInit } from '@angular/core';
import { DesignUtilServiceService } from 'src/app/appServices/design-util-service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  //userName:String = "Tej";
  userName;
  constructor(private _utilService:DesignUtilServiceService) { 
    this._utilService.userName.subscribe(uname => {
      this.userName = uname;
    })
  }

  ngOnInit(): void {
  }

  updateUserName(uname) {
    // this.userName = uname.value;
    this._utilService.userName.next(uname.value);
   }

}
