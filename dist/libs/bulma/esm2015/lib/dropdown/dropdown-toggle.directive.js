import { Directive, ElementRef, Host } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import * as i0 from "@angular/core";
import * as i1 from "./dropdown.directive";
export class DropdownToggleDirective {
    constructor(dropdown, el) {
        this.dropdown = dropdown;
        this.el = el;
        this.dropdown.toggle = this;
    }
    _toggle(event) {
        this.dropdown.open = !this.dropdown.open;
        if (this.dropdown.open) {
            setTimeout(() => this.dropdown.menu.keyManager
                .setFocusOrigin('keyboard')
                .setFirstItemActive());
        }
    }
}
DropdownToggleDirective.ɵfac = function DropdownToggleDirective_Factory(t) { return new (t || DropdownToggleDirective)(i0.ɵɵdirectiveInject(i1.DropdownDirective, 1), i0.ɵɵdirectiveInject(i0.ElementRef)); };
DropdownToggleDirective.ɵdir = i0.ɵɵdefineDirective({ type: DropdownToggleDirective, selectors: [["", "baDropdownToggle", ""]], hostAttrs: ["attr.aria-haspopup", "true"], hostBindings: function DropdownToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function DropdownToggleDirective_click_HostBindingHandler($event) { return ctx._toggle($event); });
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownToggleDirective, [{
        type: Directive,
        args: [{
                selector: '[baDropdownToggle]',
                host: {
                    'attr.aria-haspopup': 'true',
                    '(click)': '_toggle($event)'
                }
            }]
    }], function () { return [{ type: i1.DropdownDirective, decorators: [{
                type: Host
            }] }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=dropdown-toggle.directive.js.map