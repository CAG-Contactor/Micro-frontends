// Använd en självexekverande anonym funktion för att inte "smutsa"
// ner globala namnrymden.
(function () {
  class MyCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: "open"});
    }

    render() {
      const label = this.getAttribute('label');
      this.shadowRoot.innerHTML = `
      <style>
      .card {
        background: rgba(129,209,211,0.74);
        border: solid rgba(22,37,37,0.74) 1px;
        border-radius: 6px;
        padding: 16px 8px;
        text-align: center;
      }
      </style>
      <div class="card">${label}</div>
    `;
    }

    connectedCallback() {
      this.render();
      this.log('connected');
    }

    disconnectedCallback() {
      this.log('disconnected');
    }

    log(...args) {
      console.log('🔘 my-card', ...args);
    }
  }

  window.customElements.define('my-card', MyCard);
})();
