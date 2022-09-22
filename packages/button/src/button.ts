import css from './button.css';

export class Button extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'disabled', 'outlined', 'state', 'size'] as string[];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) return;
    this[name] = newValue;
  }

  private renderStyles() {
    const style = new CSSStyleSheet();
    style.replaceSync(css?.toString());
    return style;
  }

  private renderTemplate() {
    return ``;
  }

  private render() {
    const { shadowRoot } = this;
    const style = this.renderStyles();
    const template = this.renderTemplate();
    if (shadowRoot) {
      shadowRoot.innerHTML = template;
      shadowRoot.adoptedStyleSheets = [style];
    }
  }

  get label() {
    return this.getAttribute('label') as string;
  }
  set label(label: string) {
    label ? this.setAttribute('label', label) : this.removeAttribute('label');
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }
  set disabled(disabled: boolean) {
    disabled
      ? this.setAttribute('disabled', '')
      : this.removeAttribute('disabled');
  }

  get outlined() {
    return this.hasAttribute('outlined');
  }
  set outlined(outlined: boolean) {
    outlined
      ? this.setAttribute('outlined', '')
      : this.removeAttribute('outlined');
  }

  get state() {
    return this.getAttribute('state') as string;
  }
  set state(state: string) {
    state ? this.setAttribute('state', state) : this.removeAttribute('state');
  }

  get size() {
    return this.getAttribute('size') as string;
  }
  set size(size: string) {
    size ? this.setAttribute('size', size) : this.removeAttribute('size');
  }
}

if (!customElements.get('ods-button')) {
  customElements.define('ods-button', Button);
}

export default Button;
