import { Injector, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { createCustomElement } from '@angular/elements'
import {PageComponent} from "./page/page.component";
import {WidgetComponent} from "./widget/widget.component";

@NgModule({
  declarations: [
    PageComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule,
  ],
  entryComponents:[PageComponent, WidgetComponent]
})
export class WebComponentAppModule {

  constructor(private readonly injector: Injector) {
    console.log("Angular MFE - Register elements in WebComponentAppModule")
    // Convert `PageComponent` to a custom element.
    const PageElement = createCustomElement(PageComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('angular-mfe-page', PageElement);

    // Convert `WidgetComponent` to a custom element.
    const WidgetElement = createCustomElement(WidgetComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('angular-mfe-widget', WidgetElement);

    console.log("Initialized Angular MFE")
  }

  ngDoBootstrap() {}
}
