import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ElementCComponent} from './components/element-c/element-c.component';
import {ElementDComponent} from './components/element-d/element-d.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    ElementCComponent,
    ElementDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // tslint:disable-next-line:variable-name
    const root = createCustomElement(AppComponent, {injector: this.injector});
    // tslint:disable-next-line:variable-name
    const elm_c = createCustomElement(ElementCComponent, {injector: this.injector});
    // tslint:disable-next-line:variable-name
    const elm_d = createCustomElement(ElementDComponent, {injector: this.injector});
    if (!customElements.get('app1-root')) {customElements.define('app1-root', root); }
    if (!customElements.get('angular-element-c')) {customElements.define('angular-element-c', elm_c); }
    if (!customElements.get('angular-element-d')) {customElements.define('angular-element-d', elm_d); }
  }
}
