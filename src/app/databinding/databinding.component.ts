import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginUser:String = 'Tej';
  loginStatus:boolean = false;
  status1:String = "online";
  status2:String = "offline";
  enable:boolean = true;

  demoMethod() {
    return "This is the current login user : " + this.loginUser;
  }
}
