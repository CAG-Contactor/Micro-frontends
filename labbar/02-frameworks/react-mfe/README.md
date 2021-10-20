Labb 6, skapa en Micro Frontend i React
=======================================
React har inget inbyggt stöd för _Custom Element_, så här behöver man implementera dem själv
som wrappers till React-komponenter.

Uppgift
-------
Här är ett React-projekt skapat med _Create React App_.

Anpassa detta så att det kan användas som en Micro FE.

Se till att de två komponenterna [Page](src/mfe-components/Page.tsx) och
[Widget](src/app/widget/widget.component.ts) exponeras som _Custom Element_.

Vad behöver göras?
------------------

### Mappa React-komponent till Custom Element
För att skapa ett _Custom Element_ från en React-komponent, behöver man göra en wrapper enligt
följande mönster:

```tsx
import React from 'react';

import {render, unmountComponentAtNode} from 'react-dom';

// React-komponent
const MyComponent: React.FC = ({}) => {
  return (
  <div>Min komponent</div>
  )
}

export default MyComponent

// Custom Element
export class MyComponentElement extends HTMLElement {
  private shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({mode: "open"});
  }

  connectedCallback() {
    render(<MyComponent />, this.shadow);
  }

  disconnectedCallback() {
    unmountComponentAtNode(this);
  }
}

```

Mer tricks behövs för att anpassa props till attribut och events, men det kan man läsa mer om här 
[Wrapping React Components Inside Custom Elements](https://gilfink.medium.com/wrapping-react-components-inside-custom-elements-97431d1155bd).

I den här labben struntar vi dock i props.

### Registrera Custom Element
Man vill såklart ha möjlighet att utveckla som vanligt med dev-servern (man kan såklart även 
använda t.ex [Storybook](https://storybook.js.org/)). 
För att möjliggöra användning av dev-servern anpassar man uppstart i [index.ts](src/index.tsx):

```tsx
if (process.env.NODE_ENV === 'production') {
  // I prod registrerar vi Custom Element-klasserna i browsern
  customElements.define('my-component', MyComponentElement);
} else {
  // I utveckling renderar vi som vanligt
  ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
  document.getElementById('root');
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}

```

### Distro
När man bygger med Create React App får man ett knippe artefakter. Här gäller samma sak som för 
Angular när det gäller global CSS: använd prefix!

Det som till slut skall inkluderas i [App Shell](../app-shell/README.md) är det som hamnar i 
`build`-katalogen efter bygge med `npm run build`. För att göra livet lite enklare kan man dock 
packa ihop allt i samma .js-fil, men det går inte att konfigurera detta med `react-scripts`.

För att lösa detta har [rewire](https://www.npmjs.com/package/rewire) lagts till. Med _rewire_
kan man jacka in i byggprocessen och patcha webpack-konfigurationen. I det här projektet
är detta gjort i [build.js](build.js) vilken används i npm run build. I och med detta skapas
bara en `main.js`-fil. Den saknar hash i filnamnet, bara för att underlätta labben.

Sedan är det bara att lägga en script-tag för `main.js` i _App Shells_ [index.html](../app-shell/public/index.html).

Starta som vanligt:
```shell
$ npm run start:prod # Servar på localhost:4222
```
