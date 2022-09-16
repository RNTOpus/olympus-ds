import buttonTemplate from './button.html';
import buttonStyles from './button.css';

import type {
  ButtonAttribute as Attribute,
  ButtonColor,
  ButtonSize,
  ButtonType,
} from './types';

export class Button extends HTMLElement {
  private button?: HTMLButtonElement;

  static get observedAttributes() {
    return [
      'type',
      'color',
      'size',
      'disabled',
      'fully',
      'outlined',
    ] as Attribute[];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.disabled && this.handleDisabledAttribute();
    this.getAttributesAndUpdate();
  }

  attributeChangedCallback(
    name: Attribute,
    oldValue: string,
    newValue: string
  ) {
    if (oldValue === newValue) return;
    switch (name) {
      case 'disabled':
        this.handleDisabledAttribute();
        break;
      default:
        this.updateAttribute(name, newValue);
        break;
    }
  }

  render() {
    const { shadowRoot } = this;
    const styles = new CSSStyleSheet();
    (styles as any).replaceSync(buttonStyles.toString());
    const template = this.htmlToElement(buttonTemplate);
    if (shadowRoot) {
      shadowRoot.innerHTML = '';
      template && shadowRoot.appendChild(template);
      (shadowRoot as any).adoptedStyleSheets = [styles];
      this.button = shadowRoot.querySelector('button') as HTMLButtonElement;
    }
  }

  htmlToElement(html: string) {
    const template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }

  handleDisabledAttribute() {
    this.updateDisabledAttribute();
    this.shadowRoot?.addEventListener(
      'click',
      (event) => {
        this.disabled && event.preventDefault();
        this.disabled && event.stopImmediatePropagation();
      },
      true
    );
  }

  getAttributesAndUpdate() {
    this.getAttributeNames()
      .filter((attr) => !attr.match(new RegExp('^(on.*|data-*|disabled)')))
      .forEach((name: Attribute | string) =>
        this.updateAttribute(
          name as Attribute,
          this.getAttribute(name) as string
        )
      );
  }

  private readonly booleanAttributes = ['fully', 'outlined'];
  private readonly nativeAttributes = ['type'];

  private updateAttribute(name: Attribute, value: string) {
    const isBoolean = this.booleanAttributes.some((attr) => attr === name);
    const isNative = this.nativeAttributes.some((attr) => attr === name);
    const newName = isNative ? name : `data-${name}`;
    if (this.hasAttribute(name)) {
      this.button?.setAttribute(newName, `${isBoolean ? 'true' : value}`);
    } else {
      this.button?.removeAttribute(newName);
    }
  }

  private updateDisabledAttribute() {
    if (this.disabled) {
      this.button?.setAttribute('disabled', '');
    } else {
      this.button?.removeAttribute('disabled');
    }
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }
  set disabled(isDisabled: boolean) {
    isDisabled
      ? this.setAttribute('disabled', '')
      : this.removeAttribute('disabled');
  }

  get outlined() {
    return this.hasAttribute('outlined');
  }
  set outlined(isOutlined: boolean) {
    isOutlined
      ? this.setAttribute('outlined', '')
      : this.removeAttribute('outlined');
  }

  get fully() {
    return this.hasAttribute('fully');
  }
  set fully(isFully: boolean) {
    isFully
      ? this.setAttribute('fully', '')
      : this.removeAttribute('fully');
  }

  get color() {
    return this.getAttribute('color') as ButtonColor;
  }
  set color(color: ButtonColor) {
    color
      ? this.setAttribute('color', color)
      : this.removeAttribute('color');
  }

  get size() {
    return this.getAttribute('size') as ButtonSize;
  }
  set size(size: ButtonSize) {
    size
      ? this.setAttribute('size', size)
      : this.removeAttribute('size');
  }

  get type() {
    return this.getAttribute('type') as ButtonType;
  }
  set type(type: ButtonType) {
    type
      ? this.setAttribute('type', type)
      : this.removeAttribute('type');
  }
}

if (!customElements.get('ods-button')) {
  customElements.define('ods-button', Button);
}

export default Button;
