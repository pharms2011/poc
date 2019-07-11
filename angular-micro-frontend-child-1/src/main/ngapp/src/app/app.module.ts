import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementAComponent } from './components/element-a/element-a.component';
import { ElementBComponent } from './components/element-b/element-b.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    ElementAComponent,
    ElementBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AppComponent, ElementBComponent, ElementAComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // tslint:disable-next-line:variable-name
    const root = createCustomElement(AppComponent, {injector: this.injector});
    // tslint:disable-next-line:variable-name
    const elm_a = createCustomElement(ElementAComponent, {injector: this.injector});
    // tslint:disable-next-line:variable-name
    const elm_b = createCustomElement(ElementBComponent, {injector: this.injector});
    if (!customElements.get('app1-root')) {customElements.define('app1-root', root); }
    if (!customElements.get('angular-element-a')) {customElements.define('angular-element-a', elm_a); }
    if (!customElements.get('angular-element-b')) {customElements.define('angular-element-b', elm_b); }
  }
}
