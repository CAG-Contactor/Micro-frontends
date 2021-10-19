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
      const label = this.getAttribute('label');

      // rendera en div med följande styling:
      //
      //   background: rgba(129,209,211,0.74);
      //   border: solid rgba(22,37,37,0.74) 1px;
      //   border-radius: 6px;
      //   padding: 16px 8px;
      //   text-align: center;
      //
      // i shadowRoot.
      //
      // Div-elementet skall innehålla label-attributvärdet
      //
      // Ett sätt att få ut attributvärdet är att använda
      // sträng-interpolation (https://www.w3docs.com/snippets/javascript/how-to-do-string-interpolation-in-javascript.html)
      // t.ex
      //   `<div>${label}</div>`
    }
  }

  window.customElements.define('my-card', MyCard);
})();
