import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-my-bootstrap',
  templateUrl: './ngx-my-bootstrap.component.html',
  styleUrls: ['./ngx-my-bootstrap.component.css']
})
export class NgxMyBootstrapComponent implements OnInit {

  isCollapsed = false;
  constructor() { }


  ngOnInit(): void {
  }

}
