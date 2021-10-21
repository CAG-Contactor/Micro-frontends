// Använd en självexekverande anonym funktion för att inte "smutsa"
// ner globala namnrymden.
(function () {

  class ImageRandomizerElement extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.render();
      this.log('connected');
    }

    disconnectedCallback() {
      this.log('disconnected');
    }

    render() {
      this.innerHTML = `<img src="http://localhost:8090/api/v1/images/random/${window.innerWidth}/200" alt="En bild"/>`;
    }

    log(...args) {
      console.log('🔘 image-randomizer ', ...args);
    }
  }

  window.customElements.define('image-randomizer', ImageRandomizerElement);
})();
