import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myReactiveForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null),
      'course': new FormControl('Angular'),
      'gender': new FormControl('Male')
    });
  }

  onSubmit() {
    console.log(this.myReactiveForm);
  }

  genders = [
    {id:1, value:'Male'},
    {id:1, value:'Female'}
  ]

}
