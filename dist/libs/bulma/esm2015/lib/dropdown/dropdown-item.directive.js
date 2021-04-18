import { Directive, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export class DropdownItemDirective {
    constructor(el) {
        this.el = el;
    }
    focus() {
        this.el.nativeElement.focus();
    }
}
DropdownItemDirective.ɵfac = function DropdownItemDirective_Factory(t) { return new (t || DropdownItemDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
DropdownItemDirective.ɵdir = i0.ɵɵdefineDirective({ type: DropdownItemDirective, selectors: [["", "baDropdownItem", ""]], hostAttrs: [1, "dropdown-item"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownItemDirective, [{
        type: Directive,
        args: [{
                selector: '[baDropdownItem]',
                host: {
                    'class': 'dropdown-item'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=dropdown-item.directive.js.map