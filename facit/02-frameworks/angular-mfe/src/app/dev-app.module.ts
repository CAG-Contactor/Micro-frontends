import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {DevAppComponent} from './dev-app.component';
import {WebComponentAppModule} from "./web-component-app.module";

@NgModule({
  declarations: [
    DevAppComponent,
  ],
  imports: [
    WebComponentAppModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [DevAppComponent]
})
export class DevAppModule { }
