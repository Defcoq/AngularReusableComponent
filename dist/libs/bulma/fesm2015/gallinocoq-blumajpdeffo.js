import { ɵɵdefineDirective, ɵɵclassProp, ɵsetClassMetadata, Directive, ɵɵdirectiveInject, ElementRef, ɵɵlistener, Host, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵhostProperty, ɵɵattribute, ContentChildren, HostBinding, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import uniqueId from 'lodash-es/uniqueId';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { ENTER } from '@angular/cdk/keycodes';

class DropdownDirective {
    constructor() { }
    get _open() {
        return this.open;
    }
}
DropdownDirective.ɵfac = function DropdownDirective_Factory(t) { return new (t || DropdownDirective)(); };
DropdownDirective.ɵdir = ɵɵdefineDirective({ type: DropdownDirective, selectors: [["", "baDropdown", ""]], hostAttrs: [1, "dropdown"], hostVars: 2, hostBindings: function DropdownDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("is-active", ctx._open);
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DropdownDirective, [{
        type: Directive,
        args: [{
                selector: '[baDropdown]',
                host: {
                    class: 'dropdown',
                    '[class.is-active]': '_open'
                }
            }]
    }], function () { return []; }, null); })();

class DropdownToggleDirective {
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
DropdownToggleDirective.ɵfac = function DropdownToggleDirective_Factory(t) { return new (t || DropdownToggleDirective)(ɵɵdirectiveInject(DropdownDirective, 1), ɵɵdirectiveInject(ElementRef)); };
DropdownToggleDirective.ɵdir = ɵɵdefineDirective({ type: DropdownToggleDirective, selectors: [["", "baDropdownToggle", ""]], hostAttrs: ["attr.aria-haspopup", "true"], hostBindings: function DropdownToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function DropdownToggleDirective_click_HostBindingHandler($event) { return ctx._toggle($event); });
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DropdownToggleDirective, [{
        type: Directive,
        args: [{
                selector: '[baDropdownToggle]',
                host: {
                    'attr.aria-haspopup': 'true',
                    '(click)': '_toggle($event)'
                }
            }]
    }], function () { return [{ type: DropdownDirective, decorators: [{
                type: Host
            }] }, { type: ElementRef }]; }, null); })();

class DropdownItemDirective {
    constructor(el) {
        this.el = el;
    }
    focus() {
        this.el.nativeElement.focus();
    }
}
DropdownItemDirective.ɵfac = function DropdownItemDirective_Factory(t) { return new (t || DropdownItemDirective)(ɵɵdirectiveInject(ElementRef)); };
DropdownItemDirective.ɵdir = ɵɵdefineDirective({ type: DropdownItemDirective, selectors: [["", "baDropdownItem", ""]], hostAttrs: [1, "dropdown-item"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DropdownItemDirective, [{
        type: Directive,
        args: [{
                selector: '[baDropdownItem]',
                host: {
                    'class': 'dropdown-item'
                }
            }]
    }], function () { return [{ type: ElementRef }]; }, null); })();

class DropdownMenuDirective {
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
DropdownMenuDirective.ɵfac = function DropdownMenuDirective_Factory(t) { return new (t || DropdownMenuDirective)(ɵɵdirectiveInject(DropdownDirective, 1)); };
DropdownMenuDirective.ɵdir = ɵɵdefineDirective({ type: DropdownMenuDirective, selectors: [["", "baDropdownMenu", ""]], contentQueries: function DropdownMenuDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, DropdownItemDirective, 0);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
    } }, hostAttrs: [1, "dropdown-menu"], hostVars: 2, hostBindings: function DropdownMenuDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function DropdownMenuDirective_click_HostBindingHandler() { return ctx._close(); })("keydown", function DropdownMenuDirective_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); });
    } if (rf & 2) {
        ɵɵhostProperty("id", ctx.id);
        ɵɵattribute("aria-controls", ctx.ariaControls);
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DropdownMenuDirective, [{
        type: Directive,
        args: [{
                selector: '[baDropdownMenu]',
                host: {
                    class: 'dropdown-menu',
                    '(click)': '_close()',
                    '(keydown)': 'onKeydown($event)'
                }
            }]
    }], function () { return [{ type: DropdownDirective, decorators: [{
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

class BulmaModule {
}
BulmaModule.ɵfac = function BulmaModule_Factory(t) { return new (t || BulmaModule)(); };
BulmaModule.ɵmod = ɵɵdefineNgModule({ type: BulmaModule });
BulmaModule.ɵinj = ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(BulmaModule, { declarations: [DropdownDirective,
        DropdownToggleDirective,
        DropdownMenuDirective,
        DropdownItemDirective], imports: [CommonModule], exports: [DropdownDirective,
        DropdownToggleDirective,
        DropdownMenuDirective,
        DropdownItemDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BulmaModule, [{
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

/**
 * Generated bundle index. Do not edit.
 */

export { BulmaModule, DropdownDirective, DropdownItemDirective, DropdownMenuDirective, DropdownToggleDirective };
//# sourceMappingURL=gallinocoq-blumajpdeffo.js.map
