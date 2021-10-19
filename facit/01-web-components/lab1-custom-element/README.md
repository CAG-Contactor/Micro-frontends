# Lab 1, skapa ett Custom Element
I den här labben ska vi känna lite på hur man skapar ett _Custom Element_. 

Starta servern med 
```shell
$ cd .. # Man måste stå i katalogen 01-web-components
$ npm run lab1
```

Öppna sedan [localhost:4211](http://localhost:4211) i webbläsaren. 
Den kommer att ladda om när man gör ändringar i filerna i denna katalog. 
Öppna även inspektorn och ha koll på _console_.

Bakgrund
--------
Ett custom element är en klass som implementerar ett antal livscykel-metoder,
där föjande är de viktigaste:
- `connectedCallback`, anropas då elements knutits in i DOM-trädet
- `disconnectedCallback`, anropas efter att det kopplats bort från DOM:en

Exempel på minimalt _Custom Element_
```javascript
class CheckoutBuy extends HTMLElement {                    
  connectedCallback() {
    // Man kan t.ex sätta innerHTML (men andra sätt finns...)
    this.innerHTML = "<button>buy now</button>";
    
    // ...eller koppla på lyssnare
    this.addEventListener('click', this.handleClick)
  }

  disconnectedCallback() {
    // Har kan man t.ex ta bort lyssnare
    this.removeEventListener(this.handleClick)
  }
  
  handleClick = () => console.log('Banan')
}

// Sedan skall man registrera elementet
window.customElements.define("checkout-buy", CheckoutBuy);
```


Uppgift
-------
[index.html](index.html) inkluderar [my-button.js](my-button.js), samt taggen _my-button_:

```html
    :
    <script src="my-button.js"></script>
    :
    <my-button></my-button>
    :


```

[my-button.js](my-button.js) innehåller skalet för ett _Custom Element_. 
Följ instruktioner i filen samt håll koll vad som händer i webbläsaren.
För mer info om hur man implementerar _Custom Element:s_ se 
[Custom Element på MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements).

