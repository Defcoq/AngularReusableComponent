import { AfterContentInit, ContentChildren, Directive, Host, HostBinding, QueryList } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import uniqueId from 'lodash-es/uniqueId';
import { DropdownItemDirective } from './dropdown-item.directive';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { ENTER } from '@angular/cdk/keycodes';

@Directive({
  selector: '[baDropdownMenu]',
  host: {
    class: 'dropdown-menu',
    '(click)': '_close()',
    '(keydown)': 'onKeydown($event)'
}
})
export class DropdownMenuDirective implements AfterContentInit {
  @ContentChildren(DropdownItemDirective) items:
    QueryList<DropdownItemDirective>;
    public keyManager: FocusKeyManager<DropdownItemDirective>;
  @HostBinding('id') id = uniqueId('dropdown-id-');
  constructor(@Host() private dropdown: DropdownDirective) {
    this.dropdown.menu = this;
}

@HostBinding('attr.aria-controls') get ariaControls() {
  return this.dropdown.menu.id;
}

_close() {
    this.dropdown.open = false;
}

ngAfterContentInit() {
  this.keyManager = new FocusKeyManager(this.items).withWrap();
}

onKeydown(event) {
  if (event.keyCode === ENTER) {
      this.dropdown.toggle.el.nativeElement.focus();
  } else {
      this.keyManager.onKeydown(event);
  }
}

}
