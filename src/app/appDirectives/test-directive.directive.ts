import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

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

  @HostListener('click') myClick() {
    //alert('clicked');
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('mouseover') myMouseOver() {
   // alert('mouseOver');
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'white');
  }

}
