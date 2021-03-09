import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightedText]'
})
export class HighlightedTextDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() bgColor = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.backgroundColor = 'transparent';
  }

}
