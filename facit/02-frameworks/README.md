Labb 5-7, App Shell, Angular och React
======================================
Här skapar vi ett _App Shell_. Sedan implementerar vi två Micro FE:s som Custom Element med
[Angular elements](https://angular.io/guide/elements#angular-elements-overview) samt lite
[React](https://reactjs.org/) genererat med [CRA](https://create-react-app.dev/) och sedan tweakat
lite.

Sedan stoppar vi in dem i vårat _App Shell_.

- Labb 5, skapa ett App Shell
- Labb 6, skapa en Micro Frontend i Angular
- Labb 7, skapa en Micro Frontend i React

Skapa ett _App Shell_
---------------------
Jag har redan skapat ett minimalt _App Shell_ baserat på _React_.
Detta _App Shell_ inkluderar redan HTML-taggar för _Custom Element_ 
från respektive Micro-FE:
- `<angular-mfe-page>`, en sida för applikationen
- `<angular-mfe-widget>`, en widget (fragment) från applikationen
- `<react-mfe-page>`, en sida för applikationen
- `<react-mfe-widget>`, en widget (fragment) från applikationen


_App Shell_ är skapat med [create-react-app](https://create-react-app.dev):
```shell
$ cd facit/02-frameworks
$ npx create-react-app app-shell --template typescript --use-npm
$ cd app-shell
$ npm install --save react-router-dom # Lägg till React Router
$ npm install --save-dev @types/react-router-dom # ...och tillhörande typdefinitioner
```

Den innehåller en superenkel [App.tsx](./app-shell/src/App.tsx)
som visar ett widget-element för respektive Micro FE, samt routar till
en sida för respektive Micro FE.

**NOTERA!** Typdefinitioner för respektive _Custom Element_ måste läggas till i [react-app-env.d.ts](./app-shell/src/react-app-env.d.ts) för
att Typescript inte ska bråka vid kompilering av .tsx-filer.
