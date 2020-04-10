import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

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
        'email': new FormControl(null, [Validators.required, Validators.email], this.nanEmails),
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

  nanEmails(control: FormControl): Promise<any> | Observable<any> {

    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'tej@gmail.com') {
          resolve({ 'emailNotAllowed': true });
        } else {
          resolve(null);
        }
      }, 1500);
    })
    return myResponse;
  }

}
