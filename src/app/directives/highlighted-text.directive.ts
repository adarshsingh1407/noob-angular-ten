import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightedText]'
})
export class HighlightedTextDirective {

  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  @HostListener('mouseenter') onMouseEnter(): void {
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.backgroundColor = 'transparent';
  }

}
