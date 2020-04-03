import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {

  constructor() { }

  classEnable: boolean = true;
  stylePadding: String = "10px"
  isActive: boolean = false;

  ngOnInit(): void {
  }

  multiClass = {
    classEnable: true,
    class1: true,
    class2: true
  }

  multiStyle = {
    'background-color': 'red',
    'width': '100px',
    'height': '100px'
  }

}
