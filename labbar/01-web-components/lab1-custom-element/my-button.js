// Använd en självexekverande anonym funktion för att inte "smutsa"
// ner globala namnrymden.
(function () {
  // Implementera en knapp som skickar upp en alert med ett meddelande
  // när man klickar på den.
  class MyButton extends HTMLElement {
    constructor() {
      super();
    }

    // Implementera livscykelmetoder för att rendera knappen
    // samt sätta upp/ta bort lyssnare för knapptryckningar.
    // Lyssnaren ska öppna en alert med anrop till window.alert().
  }

  // Registrera elementet här
})();
