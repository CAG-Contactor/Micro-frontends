Labb 3, attribut och events i Custom Element
============================================
I den här labben ska vi lyssna på attributändringar samt generera events
i _Custom Elements_ samt koppla ihop två element. 

Starta servern med 
```shell
$ cd .. # Man måste stå i katalogen 01-web-components
$ npm run lab3
```

Öppna sedan [localhost:4213](http://localhost:4213) i webbläsaren. 
Den kommer att ladda om när man gör ändringar i filerna i denna katalog. 
Öppna även inspektorn och ha koll på _console_.

Bakgrund
--------
Att lyssna på attributförändringar kräver följande
- deklarera vilka attribut som skall lyssnas på
- hantera attributförändringar

Se även [Using the lifecycle callbacks](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks)

Exempel:

```javascript
class CheckoutBuy extends HTMLElement {
  :
  static get observedAttributes() {
    return ['label'];
  }
  :
  attributeChangedCallback(attr, oldValue, newValue) {
    // Re-render element
  }
  :
}
```

Att generera events görs genom anrop till `this.dispatchEvent()`.

Se även [CustomEvent()](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent)

Exempel:

```javascript
class CheckoutBuy extends HTMLElement {
  :
  this.dispatchEvent(new CustomEvent('my-button:changed', {
    bubbles: true,
    detail: {
      count: this.count
    }
  }))
  :
}
```




Uppgift
-------

[index.html](index.html) inkluderar [my-button.js](my-button.js) och
[my-card.js](my-card.js), samt taggarna _my-button_ och _my-card_. 
Dessutom finns lite kod som kopplar ihop event från knapp till att
ändra label-attributet i card-elementet:

```html
    :
    <script src="my-button.js"></script>
    <script src="my-card.js"></script>
    :
    <my-button label="Klicka"></my-button>
    <my-card label="No clicks yet"></my-card>
    :
    <script>
      const myButton = document.querySelector('my-button');
      const myCard = document.querySelector('my-card');
      // Koppla ihop event från my-button så att label-attribut på my-card uppdateras
      myButton.addEventListener('my-button:changed', (event) => {
        console.log('Got my-button:changed event', event);
        myCard.setAttribute('label', `Number of clicks: ${event.detail.count}`);
      })
      console.log("Started")
    </script>


```

Fyll på i [my-button.js](my-button.js) och [my-card.js](my-card.js) 
så att knapptryckningar i `my-button` uppdaterar en räknare i `my-card`.
