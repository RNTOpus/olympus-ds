export class Text extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const { shadowRoot } = this;
    if (shadowRoot) {
      shadowRoot.innerHTML = '<p>Text</p>';
    }
  }
}

if (!customElements.get('ods-text')) {
  customElements.define('ods-text', Text);
}

export default Text;
