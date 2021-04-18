import { Directive, ElementRef, Host } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

@Directive({
  selector: '[baDropdownToggle]',
  host: {
    'attr.aria-haspopup': 'true',
    '(click)': '_toggle($event)'
}
})
export class DropdownToggleDirective {

  constructor(@Host() private dropdown: DropdownDirective, public el: ElementRef) {
    this.dropdown.toggle = this;
}

_toggle(event) {
  this.dropdown.open = !this.dropdown.open;
  if (this.dropdown.open) {
      setTimeout(() =>
          this.dropdown.menu.keyManager
              .setFocusOrigin('keyboard')
              .setFirstItemActive()
      );
  }
}


}
