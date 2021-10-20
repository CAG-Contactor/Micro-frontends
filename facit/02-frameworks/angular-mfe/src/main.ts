import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DevAppModule } from './app/dev-app.module';
import { environment } from './environments/environment';
import {WebComponentAppModule} from "./app/web-component-app.module";

if (environment.production) {
  enableProdMode();
  platformBrowserDynamic().bootstrapModule(WebComponentAppModule)
    .catch(err => console.error(err));
} else {
  platformBrowserDynamic().bootstrapModule(DevAppModule)
    .catch(err => console.error(err));
}
