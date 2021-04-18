(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('lodash-es/uniqueId'), require('@angular/cdk/a11y'), require('@angular/cdk/keycodes')) :
    typeof define === 'function' && define.amd ? define('@gallinocoq/blumajpdeffo', ['exports', '@angular/core', '@angular/common', 'lodash-es/uniqueId', '@angular/cdk/a11y', '@angular/cdk/keycodes'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.gallinocoq = global.gallinocoq || {}, global.gallinocoq.blumajpdeffo = {}), global.ng.core, global.ng.common, global.uniqueId, global.ng.cdk.a11y, global.ng.cdk.keycodes));
}(this, (function (exports, i0, common, uniqueId, a11y, keycodes) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var uniqueId__default = /*#__PURE__*/_interopDefaultLegacy(uniqueId);

    var DropdownDirective = /** @class */ (function () {
        function DropdownDirective() {
        }
        Object.defineProperty(DropdownDirective.prototype, "_open", {
            get: function () {
                return this.open;
            },
            enumerable: false,
            configurable: true
        });
        return DropdownDirective;
    }());
    DropdownDirective.ɵfac = function DropdownDirective_Factory(t) { return new (t || DropdownDirective)(); };
    DropdownDirective.ɵdir = i0.ɵɵdefineDirective({ type: DropdownDirective, selectors: [["", "baDropdown", ""]], hostAttrs: [1, "dropdown"], hostVars: 2, hostBindings: function DropdownDirective_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("is-active", ctx._open);
            }
        } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[baDropdown]',
                        host: {
                            class: 'dropdown',
                            '[class.is-active]': '_open'
                        }
                    }]
            }], function () { return []; }, null);
    })();

    var DropdownToggleDirective = /** @class */ (function () {
        function DropdownToggleDirective(dropdown, el) {
            this.dropdown = dropdown;
            this.el = el;
            this.dropdown.toggle = this;
        }
        DropdownToggleDirective.prototype._toggle = function (event) {
            var _this = this;
            this.dropdown.open = !this.dropdown.open;
            if (this.dropdown.open) {
                setTimeout(function () { return _this.dropdown.menu.keyManager
                    .setFocusOrigin('keyboard')
                    .setFirstItemActive(); });
            }
        };
        return DropdownToggleDirective;
    }());
    DropdownToggleDirective.ɵfac = function DropdownToggleDirective_Factory(t) { return new (t || DropdownToggleDirective)(i0.ɵɵdirectiveInject(DropdownDirective, 1), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    DropdownToggleDirective.ɵdir = i0.ɵɵdefineDirective({ type: DropdownToggleDirective, selectors: [["", "baDropdownToggle", ""]], hostAttrs: ["attr.aria-haspopup", "true"], hostBindings: function DropdownToggleDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function DropdownToggleDirective_click_HostBindingHandler($event) { return ctx._toggle($event); });
            }
        } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownToggleDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[baDropdownToggle]',
                        host: {
                            'attr.aria-haspopup': 'true',
                            '(click)': '_toggle($event)'
                        }
                    }]
            }], function () {
            return [{ type: DropdownDirective, decorators: [{
                            type: i0.Host
                        }] }, { type: i0.ElementRef }];
        }, null);
    })();

    var DropdownItemDirective = /** @class */ (function () {
        function DropdownItemDirective(el) {
            this.el = el;
        }
        DropdownItemDirective.prototype.focus = function () {
            this.el.nativeElement.focus();
        };
        return DropdownItemDirective;
    }());
    DropdownItemDirective.ɵfac = function DropdownItemDirective_Factory(t) { return new (t || DropdownItemDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    DropdownItemDirective.ɵdir = i0.ɵɵdefineDirective({ type: DropdownItemDirective, selectors: [["", "baDropdownItem", ""]], hostAttrs: [1, "dropdown-item"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownItemDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[baDropdownItem]',
                        host: {
                            'class': 'dropdown-item'
                        }
                    }]
            }], function () { return [{ type: i0.ElementRef }]; }, null);
    })();

    var DropdownMenuDirective = /** @class */ (function () {
        function DropdownMenuDirective(dropdown) {
            this.dropdown = dropdown;
            this.id = uniqueId__default['default']('dropdown-id-');
            this.dropdown.menu = this;
        }
        Object.defineProperty(DropdownMenuDirective.prototype, "ariaControls", {
            get: function () {
                return this.dropdown.menu.id;
            },
            enumerable: false,
            configurable: true
        });
        DropdownMenuDirective.prototype._close = function () {
            this.dropdown.open = false;
        };
        DropdownMenuDirective.prototype.ngAfterContentInit = function () {
            this.keyManager = new a11y.FocusKeyManager(this.items).withWrap();
        };
        DropdownMenuDirective.prototype.onKeydown = function (event) {
            if (event.keyCode === keycodes.ENTER) {
                this.dropdown.toggle.el.nativeElement.focus();
            }
            else {
                this.keyManager.onKeydown(event);
            }
        };
        return DropdownMenuDirective;
    }());
    DropdownMenuDirective.ɵfac = function DropdownMenuDirective_Factory(t) { return new (t || DropdownMenuDirective)(i0.ɵɵdirectiveInject(DropdownDirective, 1)); };
    DropdownMenuDirective.ɵdir = i0.ɵɵdefineDirective({ type: DropdownMenuDirective, selectors: [["", "baDropdownMenu", ""]], contentQueries: function DropdownMenuDirective_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, DropdownItemDirective, 0);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.items = _t);
            }
        }, hostAttrs: [1, "dropdown-menu"], hostVars: 2, hostBindings: function DropdownMenuDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function DropdownMenuDirective_click_HostBindingHandler() { return ctx._close(); })("keydown", function DropdownMenuDirective_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); });
            }
            if (rf & 2) {
                i0.ɵɵhostProperty("id", ctx.id);
                i0.ɵɵattribute("aria-controls", ctx.ariaControls);
            }
        } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownMenuDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[baDropdownMenu]',
                        host: {
                            class: 'dropdown-menu',
                            '(click)': '_close()',
                            '(keydown)': 'onKeydown($event)'
                        }
                    }]
            }], function () {
            return [{ type: DropdownDirective, decorators: [{
                            type: i0.Host
                        }] }];
        }, { items: [{
                    type: i0.ContentChildren,
                    args: [DropdownItemDirective]
                }], id: [{
                    type: i0.HostBinding,
                    args: ['id']
                }], ariaControls: [{
                    type: i0.HostBinding,
                    args: ['attr.aria-controls']
                }] });
    })();

    var BulmaModule = /** @class */ (function () {
        function BulmaModule() {
        }
        return BulmaModule;
    }());
    BulmaModule.ɵfac = function BulmaModule_Factory(t) { return new (t || BulmaModule)(); };
    BulmaModule.ɵmod = i0.ɵɵdefineNgModule({ type: BulmaModule });
    BulmaModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[common.CommonModule]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BulmaModule, { declarations: [DropdownDirective,
                DropdownToggleDirective,
                DropdownMenuDirective,
                DropdownItemDirective], imports: [common.CommonModule], exports: [DropdownDirective,
                DropdownToggleDirective,
                DropdownMenuDirective,
                DropdownItemDirective] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BulmaModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [common.CommonModule],
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
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BulmaModule = BulmaModule;
    exports.DropdownDirective = DropdownDirective;
    exports.DropdownItemDirective = DropdownItemDirective;
    exports.DropdownMenuDirective = DropdownMenuDirective;
    exports.DropdownToggleDirective = DropdownToggleDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=gallinocoq-blumajpdeffo.umd.js.map
