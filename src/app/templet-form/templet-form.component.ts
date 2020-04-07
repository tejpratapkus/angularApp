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
  defaultGender = 'Male';
  username = '';
  submitted = false;

  genders = [
    {id:1, value:'Male'},
    {id:1, value:'Female'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  setUserName() {
  /*  this.myForm.setValue({
      userDetails:  {
        username: 'Tej',
        email: ''
      },
      course: 'Angular',
      gender: 'Male'
    });*/

    this.myForm.form.patchValue({
      userDetails:  {
        username: 'Tej'
      }
    });
  }

  /*onSubmit(form:HTMLFontElement) {
    //console.log("submitted");
    console.log(form);
  }*/

  /*onSubmit(form:NgForm) {
    //console.log("submitted");
    console.log(form);
  } */

  formData = {
    username: '',
    email: '',
    course: '',
    gender: ''
  }

  //View child
  onSubmit() {
    //console.log("submitted");
    console.log(this.myForm);
    this.submitted = true;

    this.formData.username = this.myForm.value.userDetails.username;
    this.formData.email = this.myForm.value.userDetails.email;
    this.formData.course = this.myForm.value.course;
    this.formData.gender = this.myForm.value.gender;

    this.myForm.reset();
  }

}
