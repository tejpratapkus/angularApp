import { Component, OnInit } from '@angular/core';
import { DesignUtilServiceService } from 'src/app/appServices/design-util-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  userName:String = "Tej";
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
