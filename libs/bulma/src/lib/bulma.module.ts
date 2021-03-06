import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown/dropdown.directive';
import { DropdownToggleDirective } from './dropdown/dropdown-toggle.directive';
import { DropdownMenuDirective } from './dropdown/dropdown-menu.directive';
import { DropdownItemDirective } from './dropdown/dropdown-item.directive';

export * from './dropdown/dropdown-item.directive';
export * from './dropdown/dropdown-menu.directive';
export * from './dropdown/dropdown-toggle.directive';
export * from './dropdown/dropdown.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DropdownDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective
  ],
  exports: [
    DropdownDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective
  ],
})
export class BulmaModule {}
