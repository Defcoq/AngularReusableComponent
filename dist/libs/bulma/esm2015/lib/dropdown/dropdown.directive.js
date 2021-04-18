import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class DropdownDirective {
    constructor() { }
    get _open() {
        return this.open;
    }
}
DropdownDirective.ɵfac = function DropdownDirective_Factory(t) { return new (t || DropdownDirective)(); };
DropdownDirective.ɵdir = i0.ɵɵdefineDirective({ type: DropdownDirective, selectors: [["", "baDropdown", ""]], hostAttrs: [1, "dropdown"], hostVars: 2, hostBindings: function DropdownDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("is-active", ctx._open);
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownDirective, [{
        type: Directive,
        args: [{
                selector: '[baDropdown]',
                host: {
                    class: 'dropdown',
                    '[class.is-active]': '_open'
                }
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=dropdown.directive.js.map