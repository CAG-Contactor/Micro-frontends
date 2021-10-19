# Labb 2, använd Shadow DOM
I den här labben ska vi använda _Shadow DOM_. 

Starta servern med 
```shell
$ cd .. # Man måste stå i katalogen 01-web-components
$ npm run lab2
```

Öppna sedan [localhost:4212](http://localhost:4212) i webbläsaren. 
Den kommer att ladda om när man gör ändringar i filerna i denna katalog. 
Öppna även inspektorn och ha koll på _console_.

Bakgrund
--------
Att lägga till _Shadow DOM_ gör genom anrop till `this.attachShadow({mode: "open"})`
(se mer i [Using shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)).

Sedan renderar man elementet i `this.shadowRoot`.

Exempel på shadow DOM:

```javascript
class CheckoutBuy extends HTMLElement {
  constructor() {
    super();
    :
    this.attachShadow({mode: "open"});
    :
  }
  :
  connectedCallback() {
    :
    this.shadowRoot.innerHTML = `
      <style>
        button {
          background: red;
          color: white
        }
      </style>
      <button>buy now</button>
    `;
    :
  }
  :
}
```

Uppgift
-------

[index.html](index.html) inkluderar [my-card.js](my-card.js), samt taggen _my-card_:

```html
    :
    <script src="my-card.js"></script>
    :
    <my-card></my-card>
    :


```

[my-card.js](my-card.js) innehåller skalet för ett _Custom Element_. 
Följ instruktioner i filen samt håll koll vad som händer i webbläsaren.

