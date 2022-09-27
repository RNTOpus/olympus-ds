import css from './button.css';

export class Button extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'disabled'] as string[];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name: string) {
    if (name === 'disabled') this.handleDisabledAttribute();
    if (name === 'label') this.rerender();
  }

  private renderStyles() {
    const style = new CSSStyleSheet();
    (style as any).replaceSync(css?.toString());
    return style;
  }

  private renderLabel() {
    return `<span class="ods-button-label" part="label">${this.label}</span>`
  }

  private renderTemplate() {
    return `
    <button type="${this.type || 'button'}" part="button" ${
      this.disabled ? 'disabled' : ''
    }>
      <slot name="left-icon"></slot>
      ${this.label ? this.renderLabel() : ''}
      <span class="ods-button-container-slot" part="container-slot">
        <slot></slot>
      </span>
      <slot name="right-icon"></slot>
    </button>`;
  }

  private render() {
    const { shadowRoot } = this;
    const style = this.renderStyles();
    const template = this.renderTemplate();
    if (shadowRoot) {
      shadowRoot.innerHTML = template;
      (shadowRoot as any).adoptedStyleSheets = [style];
    }
  }

  private rerender() {
    const { shadowRoot } = this;
    const template = this.renderTemplate();
    if (shadowRoot) shadowRoot.innerHTML = template;
  }

  private handleDisabledAttribute() {
    this.rerender();
    this.shadowRoot?.addEventListener(
      'click',
      (event) => {
        this.disabled && event.preventDefault();
        this.disabled && event.stopImmediatePropagation();
      },
      true
    );
  }

  get label() {
    return this.getAttribute('label') as string;
  }
  set label(label: string) {
    label ? this.setAttribute('label', label) : this.removeAttribute('label');
  }

  get type() {
    return this.getAttribute('type') as string;
  }
  set type(type: string) {
    type ? this.setAttribute('type', type) : this.removeAttribute('type');
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

  get fully() {
    return this.hasAttribute('fully');
  }
  set fully(fully: boolean) {
    fully ? this.setAttribute('fully', '') : this.removeAttribute('fully');
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
