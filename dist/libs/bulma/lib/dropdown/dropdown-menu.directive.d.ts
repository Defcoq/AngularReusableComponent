import { AfterContentInit, QueryList } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { DropdownItemDirective } from './dropdown-item.directive';
import { FocusKeyManager } from '@angular/cdk/a11y';
import * as i0 from "@angular/core";
export declare class DropdownMenuDirective implements AfterContentInit {
    private dropdown;
    items: QueryList<DropdownItemDirective>;
    keyManager: FocusKeyManager<DropdownItemDirective>;
    id: any;
    constructor(dropdown: DropdownDirective);
    get ariaControls(): any;
    _close(): void;
    ngAfterContentInit(): void;
    onKeydown(event: any): void;
    static ɵfac: i0.ɵɵFactoryDef<DropdownMenuDirective, [{ host: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<DropdownMenuDirective, "[baDropdownMenu]", never, {}, {}, ["items"]>;
}
//# sourceMappingURL=dropdown-menu.directive.d.ts.map