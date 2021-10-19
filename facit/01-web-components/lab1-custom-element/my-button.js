// Använd en självexekverande anonym funktion för att inte "smutsa"
// ner globala namnrymden.
(function () {

  class MyButton extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.render();
      this.addEventListener('click', this.handleClick);
      this.log('connected');
    }

    disconnectedCallback() {
      this.firstChild.removeEventListener('click', this.handleClick);
      this.log('disconnected');
    }

    render() {
      this.innerHTML = `<button type="button">Min knapp</button>`;
    }

    handleClick = () => alert("Knappen har klickats")

    log(...args) {
      console.log('🔘 my-button', ...args);
    }
  }

  window.customElements.define('my-button', MyButton);
})();
