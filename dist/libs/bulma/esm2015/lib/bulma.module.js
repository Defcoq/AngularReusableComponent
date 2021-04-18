import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown/dropdown.directive';
import { DropdownToggleDirective } from './dropdown/dropdown-toggle.directive';
import { DropdownMenuDirective } from './dropdown/dropdown-menu.directive';
import { DropdownItemDirective } from './dropdown/dropdown-item.directive';
import * as i0 from "@angular/core";
export * from './dropdown/dropdown-item.directive';
export * from './dropdown/dropdown-menu.directive';
export * from './dropdown/dropdown-toggle.directive';
export * from './dropdown/dropdown.directive';
export class BulmaModule {
}
BulmaModule.ɵfac = function BulmaModule_Factory(t) { return new (t || BulmaModule)(); };
BulmaModule.ɵmod = i0.ɵɵdefineNgModule({ type: BulmaModule });
BulmaModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BulmaModule, { declarations: [DropdownDirective,
        DropdownToggleDirective,
        DropdownMenuDirective,
        DropdownItemDirective], imports: [CommonModule], exports: [DropdownDirective,
        DropdownToggleDirective,
        DropdownMenuDirective,
        DropdownItemDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BulmaModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
//# sourceMappingURL=bulma.module.js.map