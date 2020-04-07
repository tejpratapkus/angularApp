import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';
import { style } from '@angular/animations';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) { 
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }

  changeBg(color:String) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

  @HostBinding('style.backgroundColor') bgColor;
  @HostBinding('class.myClass') className;
  
  @HostListener('click') myClick() {
    //alert('clicked');
    //this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
    this.bgColor = 'blue';
    this.className = true;
  }

  @HostListener('mouseover') myMouseOver() {
   // alert('mouseOver');
   // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'white');
   this.bgColor = 'yellow';
  }

}
