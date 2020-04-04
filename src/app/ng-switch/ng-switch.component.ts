import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  selectedProduct:String = "";
  constructor() { }

  ngOnInit(): void {
  }

  getProductVal(event) {

    console.log(event.target.value);
    this.selectedProduct = event.target.value;

  }

}
