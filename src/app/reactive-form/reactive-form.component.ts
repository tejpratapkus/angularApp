import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myReactiveForm: FormGroup;
  notAllowedUserName = ['Tej', 'Pratap'];
  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'userDetails': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.nanNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'course': new FormControl('Angular'),
      'gender': new FormControl('Male'),
      'skills': new FormArray([new FormControl(null, Validators.required)])
    });
  }

  onSubmit() {
    console.log(this.myReactiveForm);
  }

  onAddSkills() {
    (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }

  genders = [
    { id: 1, value: 'Male' },
    { id: 1, value: 'Female' }
  ]

  nanNames(control: FormControl) {

    if (this.notAllowedUserName.indexOf(control.value) !== -1) {
      return { 'nameIsNotAllowed': true };
    } else {
      return null;
    }

  }

}
