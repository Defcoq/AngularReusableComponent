import { ContentChildren, Directive, Host, HostBinding, QueryList } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import uniqueId from 'lodash-es/uniqueId';
import { DropdownItemDirective } from './dropdown-item.directive';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { ENTER } from '@angular/cdk/keycodes';
import * as i0 from "@angular/core";
import * as i1 from "./dropdown.directive";
export class DropdownMenuDirective {
    constructor(dropdown) {
        this.dropdown = dropdown;
        this.id = uniqueId('dropdown-id-');
        this.dropdown.menu = this;
    }
    get ariaControls() {
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
        }
        else {
            this.keyManager.onKeydown(event);
        }
    }
}
DropdownMenuDirective.ɵfac = function DropdownMenuDirective_Factory(t) { return new (t || DropdownMenuDirective)(i0.ɵɵdirectiveInject(i1.DropdownDirective, 1)); };
DropdownMenuDirective.ɵdir = i0.ɵɵdefineDirective({ type: DropdownMenuDirective, selectors: [["", "baDropdownMenu", ""]], contentQueries: function DropdownMenuDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, DropdownItemDirective, 0);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.items = _t);
    } }, hostAttrs: [1, "dropdown-menu"], hostVars: 2, hostBindings: function DropdownMenuDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function DropdownMenuDirective_click_HostBindingHandler() { return ctx._close(); })("keydown", function DropdownMenuDirective_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); });
    } if (rf & 2) {
        i0.ɵɵhostProperty("id", ctx.id);
        i0.ɵɵattribute("aria-controls", ctx.ariaControls);
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownMenuDirective, [{
        type: Directive,
        args: [{
                selector: '[baDropdownMenu]',
                host: {
                    class: 'dropdown-menu',
                    '(click)': '_close()',
                    '(keydown)': 'onKeydown($event)'
                }
            }]
    }], function () { return [{ type: i1.DropdownDirective, decorators: [{
                type: Host
            }] }]; }, { items: [{
            type: ContentChildren,
            args: [DropdownItemDirective]
        }], id: [{
            type: HostBinding,
            args: ['id']
        }], ariaControls: [{
            type: HostBinding,
            args: ['attr.aria-controls']
        }] }); })();
//# sourceMappingURL=dropdown-menu.directive.js.map