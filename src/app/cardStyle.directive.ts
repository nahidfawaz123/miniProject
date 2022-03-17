import { Directive, HostListener, HostBinding, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[cardStyle]'
})
export class cardStyleDirective implements OnInit {
 constructor(private el :ElementRef){
 }
@HostBinding('style.backgroundColor') backgroundColor :string = 'lightgray';

ngOnInit(){
  // this.renderer.setStyle(this.el.nativeElement, 'background-color ','red')
}
@HostListener ('mouseenter') mouseover(eventData: Event){
  // this.renderer.setStyle(this.el.nativeElement, 'background-color ','red')
  this.backgroundColor='red'
}
@HostListener ('mouseleave') mousleaver(eventData: Event){
  // this.renderer.setStyle(this.el.nativeElement, 'background-color ','black')
  this.backgroundColor='lightgray'

 }
 }
