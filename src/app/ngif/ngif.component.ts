import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  isValid: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  pobulateDiv() {
    this.isValid = true;
  }

}
