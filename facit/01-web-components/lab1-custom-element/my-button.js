// Använd en självexekverande anonym funktion för att inte "smutsa"
// ner globala namnrymden.
(function () {

  class MyButton extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `<button type="button">Min knapp</button>`;
      this.addEventListener('click', this.handleClick);
      this.log('connected');
    }

    disconnectedCallback() {
      this.removeEventListener('click', this.handleClick);
      this.log('disconnected');
    }

    handleClick = () => alert("Knappen har klickats")

    log(...args) {
      console.log('🔘 my-button', ...args);
    }
  }

  window.customElements.define('my-button', MyButton);
})();
