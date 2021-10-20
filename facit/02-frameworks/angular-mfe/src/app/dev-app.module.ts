import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {DevAppComponent} from './dev-app.component';

@NgModule({
  declarations: [
    DevAppComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DevAppComponent]
})
export class DevAppModule { }
