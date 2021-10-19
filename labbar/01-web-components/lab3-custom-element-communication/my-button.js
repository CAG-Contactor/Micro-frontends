// Använd en självexekverande anonym funktion för att inte "smutsa"
// ner globala namnrymden.
(function () {
  class MyButton extends HTMLElement {
    // Bygg vidare på klassen från labb 1 och lägg till
    // skickning av events när man klickar, samt hantering av räknare
  }

  window.customElements.define('my-button', MyButton);
})();
