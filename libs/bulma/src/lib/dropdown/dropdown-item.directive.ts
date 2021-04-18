import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[baDropdownItem]',
  host: {
    'class': 'dropdown-item'
}
})
export class DropdownItemDirective {

  constructor(private el: ElementRef) { }

  focus() {
    this.el.nativeElement.focus();
}

}
