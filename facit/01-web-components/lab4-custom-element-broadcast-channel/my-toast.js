class MyToast extends HTMLElement {
  constructor() {
    super();
    this.channel = undefined;
    this.text = undefined;
    this.show = false;
    this.attachShadow({mode: "open"});
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
      .toast {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
        box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;
        background: rgba(255,0,0,0.74);
        border-radius: 6px;
        padding: 16px 8px;
        text-align: center;
      }
      
      .hide {
        display: none;
      }

      .show {
        display: block;
      }
      
      
      </style>
      <div class="toast ${this.show?'show':'hide'}">${this.text}</div>
    `;
  }

  connectedCallback() {
    this.channel = new BroadcastChannel("toast-channel");
    this.channel.onmessage = (e) => {
      if (e.data?.type === "show_toast") {
        this.text = e.data?.text;
        this.show = true;
        this.render();
        setTimeout(() => {
              this.show = false;
              this.render();
            },
            5000
        );
      }
    };

    this.render();
    this.log('connected');
  }

  disconnectedCallback() {
    this.channel?.close();
    this.log('disconnected');
  }

  log(...args) {
    console.log('🔘 my-card', ...args);
  }
}

window.customElements.define('my-toast', MyToast);
