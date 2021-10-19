// Använd en självexekverande anonym funktion för att inte "smutsa"
// ner globala namnrymden.
(function () {
  class MyCard extends HTMLElement {
    // Bygg vidare på klassen från labb 1 och lägg till
    // lyssnare för attributändringar i 'label'-attributet
  }

  window.customElements.define('my-card', MyCard);
})();
