import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ElementRef, ContentChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})

/*export class LoginCompComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy {*/

export class LoginCompComponent implements OnInit, AfterContentInit {

  inputValue = "Tej";
  @ContentChild('childCont') contentParagraph:ElementRef;
  constructor(private renderer:Renderer2) {
    
  }

  ngOnInit(): void {
    
  }

  ngAfterContentInit() {
    console.log(this.contentParagraph);
    this.renderer.setStyle(this.contentParagraph.nativeElement, 'color', 'green');
  }

  submitValue() {
    alert(this.inputValue);
    var text = this.renderer.createText("new text append at the time of submit");
    this.renderer.appendChild(this.contentParagraph.nativeElement, text);
  }

  /* @Input() inputValue = "Tej";
   constructor() {
     console.log("constructor");
   }
 
   ngOnInit(): void {
     console.log("ngOnInit");
   }
 
   ngOnChanges(changes: SimpleChanges): void {
     //console.log("ngOnChanges");
     console.log(changes);
   }
 
   ngDoCheck() {
     console.log("ngDoCheck");
   }
 
   ngAfterContentInit() {
     console.log("ngAfterContentInit");
   }
 
   ngAfterContentChecked() {
     console.log("ngAfterContentChecked");
   }
 
   ngAfterViewChecked() {
     console.log("ngAfterViewChecked");
   }
 
   ngAfterViewInit() {
     console.log("ngAfterViewInit");
   }
 
   ngOnDestroy() {
     console.log("ngOnDestroy");
   }*/

}
