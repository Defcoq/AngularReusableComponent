import { Directive } from '@angular/core';
import { DropdownMenuDirective } from './dropdown-menu.directive';
import { DropdownToggleDirective } from './dropdown-toggle.directive';

@Directive({
  selector: '[baDropdown]',
  host: {
    class: 'dropdown',
    '[class.is-active]': '_open'
}
})
export class DropdownDirective {
  public open: boolean;
  public menu: DropdownMenuDirective;
  public toggle: DropdownToggleDirective;

  get _open() {
      return this.open;
  }
  constructor() { }


}
