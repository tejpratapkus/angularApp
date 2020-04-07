import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templet-form',
  templateUrl: './templet-form.component.html',
  styleUrls: ['./templet-form.component.css']
})
export class TempletFormComponent implements OnInit {

  @ViewChild('myForm') myForm:NgForm;
  defaultCourse = 'Angular';
  username = '';
  constructor() { }

  ngOnInit(): void {
  }

  /*onSubmit(form:HTMLFontElement) {
    //console.log("submitted");
    console.log(form);
  }*/

  /*onSubmit(form:NgForm) {
    //console.log("submitted");
    console.log(form);
  } */

  //View child
  onSubmit() {
    //console.log("submitted");
    console.log(this.myForm);
  }

}
