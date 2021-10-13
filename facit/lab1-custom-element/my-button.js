class MyButton extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    this.innerHTML = `<button type="button">Min knapp</button>`;
  }

  connectedCallback() {
    this.render();
    this.firstChild.addEventListener('click', this.handleClick);
    this.log('connected');
  }

  disconnectedCallback() {
    this.firstChild.removeEventListener('click', this.handleClick);
    this.log('disconnected');
  }

  handleClick = () => alert("Knappen har klickats")

  log(...args) {
    console.log('🔘 my-button', ...args);
  }
}
window.customElements.define('my-button', MyButton);
