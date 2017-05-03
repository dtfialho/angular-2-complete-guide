import { Directive, HostListener, HostBinding } from '@angular/core';
// import { Directive, HostListener, ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  // isOpen = false;
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') click(eventData: Event) {
    this.isOpen = !this.isOpen;
    // if(this.isOpen) {
    //   this.renderer.addClass(this.elRef.nativeElement, 'open');
    // } else {
    //   this.renderer.removeClass(this.elRef.nativeElement, 'open');
    // }
  }

  // constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  constructor() {}
}
