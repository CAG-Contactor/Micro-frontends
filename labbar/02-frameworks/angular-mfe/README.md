Labb 5, skapa en Micro Frontend i Angular
=========================================
Angular har en färdig lösning för att skapa _Custom Element_:
[@angular/element](https://angular.io/guide/elements#angular-elements-overview).

Detta gör att det är ganska enkelt att skapa en Angular-baserad Micro FE. Det finns en färdig function
`createCustomElement(..)` som omvandlar en Angular-komponent till ett _Custom Element_.

Uppgift
-------
Här är ett Angular-projekt skapat med _Angular CLI_. 

Anpassa detta så att det kan användas som en Micro FE.

Se till att de två komponenterna [PageComponent](src/app/page/page.component.ts) och 
[WidgetComponent](src/app/widget/widget.component.ts) exponeras som _Custom Element_ med taggarna:
- `<angular-mfe-page/>`
- `<angular-mfe-widget/>`

Vad behöver göras?
------------------
### Bootstrapping & moduler
För att underlätta utveckling och att kunna använda dev-servern kan det dock vara användbart att bootstrappa Angular 
på olika sätt beroende på _environment_. 
För produktion skapar man en egen modul som bara skapar och registrerar _Custom Element_. I utveckling
vill man boostrappa som en standalone-applikation och för detta kan man skapa en egen rotmodul, som boostrappar en
rot-komponent, men även inkluderar prod-modulen.

Alternativt kan man använda t.ex [Storybook](https://storybook.js.org/).

#### Prod-modul

Säg att vi har skapat en Angular-komponent: _MyComponent_. Den skall registreras i modulen som används i prod, här kall
vi den _WebComponentAppModule_.

```typescript
import {Injector, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {createCustomElement} from '@angular/elements'

import {MyComponent} from './my-component/my.component'

@NgModule({
  declarations: [
    // Lägg till alla komponenter som vanligt
    MyComponent
  ],
  exports: [
    // Exportera så att den kan användas i dev-modulen
    MyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // BOOTSTRAPPA INTE!!! Vi vill bara starta denna modul och registrera komponenter
  // bootstrap: [],
  entryComponents: [
    // Här lägger vi in de komponenter som vi ska skapa Custom Element för
    // eftersom de skall skapas dynamiskt
    MyComponent
  ]
})
export class WebComponentAppModule {
  constructor(private readonly injector: Injector) {
    // Skapa Custom Element
    const MittCustomElement = createCustomElement(MyComponent, {injector});
    // Registrera 
    customElements.define('tdo-page', MittCustomElement);
  }

  ngDoBootstrap() {}

}
```

#### Dev-modul

I modulen som används vid utveckling inkluderar vi prod-modulen

```typescript
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {DevAppComponent} from './dev-app.component'
import {WebComponentAppModule} from './web-component-app.module'

@NgModule({
  declarations: [
    DevAppComponent // Här deklarerar vi rot-komponenten
  ],
  imports: [
    WebComponentAppModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // OBS, den här behövs om man 
                                     // skall använda det registrerade custom-elementet
                                     // i app.component.html
  bootstrap: [DevAppComponent] // OBS, vi måste bootstrappa rot-komponenten också!
})
export class DevAppModule {
}
```

#### Main

Till sist moddar vi _main.ts_ och väljer vilken modul som skall startas beroende på miljö.

```typescript
import {enableProdMode} from '@angular/core'
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'

import {WebComponentAppModule} from './app/web-component-app.module'
import {environment} from './environments/environment'
import {DevAppModule} from './app/dev-app.module'

if (environment.production) {
    enableProdMode();
    platformBrowserDynamic().bootstrapModule(WebComponentAppModule)
        .catch(err => console.error(err));
} else {
    platformBrowserDynamic().bootstrapModule(DevAppModule)
        .catch(err => console.error(err));
}
```

### Integrera i App Shell
Det som till slut skall inkluderas i [App Shell](../app-shell/README.md) är det som hamnar i `dist`-katalogen efter bygge
med `npm run build`.

När det gäller global CSS kan det vara läge att prefixa alla klasser med app-specifikt prefix, t.ex `angular-mfe`.
Eventuell styling som definieras lokalt för komponenter inkapslas normalt i komponentvyn (se [View encapsulation
](https://angular.io/guide/view-encapsulation)), så de ger inga problem.

Hursomhelst, i labben kan man nöja sig med att bara styla på komponent-nivå och strunta i global CSS.
Därmed räcker det med att inkludera .js-filer i _App Shell_.

För att undvika kollisioner med olika versioner av _Angular_ i olika Micro FE:s är det viktigt att skapa en .js-fil
med både applikation och runtime. Detta stödjer inte _Angular CLI_ out-of-the-box, så man får lägga till 
`ngx-build-plus` med `ng add ngx-build-plus` och bygga med `--single-bundle`, så får man en `main.js` och
en `polyfills.js`.

Dessutom, för att förenkla bygger vi utan att skapa cache-buster med has i filnamnet, men det är bara nu för labben. Skriptet "build" i [package.json](./package.json)
är förberett för detta.

Sedan inkluderas byggartefakterna (OBS ordningen är viktig):
- dist/angular-mfe/polyfills.js
- dist/angular-mfe/main.js
 
i [index.html](../app-shell/public/index.html) för _App Shell_ med script-taggar, typ:
```html
:
<script src="http://localhost:4221/angular-mfe/polyfills.js" async></script>
:
```
lämpligen efter `<body>`, leta efter 
```html  
  <!--
    !!! Micro Frontends !!!
    Lägg till script includes här!
  -->
```
  


Starta sedan den här applikationen med
```shell
$ npm run start:prod # Startar en server som exponerar dist-katalogen på localhost:4221
```
och _App Shell_:
```shell
$ cd ../app-shell
$ npm start # Startar en server på localhost:3000
```

