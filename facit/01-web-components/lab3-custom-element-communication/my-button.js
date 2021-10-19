// Använd en självexekverande anonym funktion för att inte "smutsa"
// ner globala namnrymden.
(function () {
  class MyButton extends HTMLElement {
    constructor() {
      super();
      this.count = 0;
    }

    static get observedAttributes() {
      return ['label'];
    }

    render() {
      const label = this.getAttribute('label');
      this.innerHTML = `<button type="button">${label}</button>`;
    }

    connectedCallback() {
      this.render();
      this.firstChild.addEventListener('click', this.increment);
      this.log('connected');
    }

    disconnectedCallback() {
      this.firstChild.removeEventListener('click', this.increment);
      this.log('disconnected');
    }

    attributeChangedCallback(attr, oldValue, newValue) {
      this.log('attributeChanged', attr, oldValue, newValue);
      this.render();
    }

    increment = () => {
      this.count += 1;
      this.log('increment', this.count);

      this.dispatchEvent(new CustomEvent('my-button:changed', {
        bubbles: true,
        detail: {
          count: this.count
        }
      }));
      this.log('event sent "my-button:changed"');
    }

    log(...args) {
      console.log('🔘 my-button', ...args);
    }
  }

  window.customElements.define('my-button', MyButton);
})();
