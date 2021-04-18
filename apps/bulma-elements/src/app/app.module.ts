import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [PaginationComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [PaginationComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(PaginationComponent, { injector });
    customElements.define('ba-pagination', el);
}

ngDoBootstrap() { }

}
