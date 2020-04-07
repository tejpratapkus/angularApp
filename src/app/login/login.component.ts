import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { LoginCompComponent } from './login-comp/login-comp.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  /* value:String;
   constructor() { }
 
   ngOnInit(): void {
   }
 
   submitValue(val) {
     this.value = val.value;
   }*/

  //view child
  userName = "Tej";
  @ViewChild('box') box: ElementRef;
  @ViewChild(LoginCompComponent) child: LoginCompComponent;

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    //console.log(this.box);
    //this.box.nativeElement.style.backgroundColor = "blue";
    // this.box.nativeElement.innerHTML = "blue";
   // console.log(this.child);

   this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'red');
   this.renderer.setStyle(this.box.nativeElement, 'color', 'white');

  }

  changeChildProperty() {
    this.child.inputValue = "Tejpratap"
  }
   
  callChildMethod() {
     this.child.submitValue();
  }

}
