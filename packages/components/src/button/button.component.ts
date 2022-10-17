import { CSSResultGroup, html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import type { OdsButtonSize as Size, OdsButtonType as Type, OdsButtonVariant as Variant } from './button.types';
import styles from './button.styles';

@customElement('ods-button')
export class OdsButton extends LitElement {

  static styles: CSSResultGroup = styles;

  @query('.button') button?: HTMLButtonElement;

  @property({ reflect: true }) variant: Variant = 'primary';

  @property({ reflect: true }) size: Size = 'normal';

  @property({ type: Boolean, reflect: true }) disabled = false;

  @property({ type: Boolean, reflect: true }) outlined = false;

  @property({ type: Boolean, reflect: true }) fully = false;

  @property() type: Type = 'button';

  click() {
    this.button?.click();
  }

  handleBlur() {
    const event = new CustomEvent('ods-blur', {
      bubbles: true,
      cancelable: false,
      composed: true
    });

    this.dispatchEvent(event);
  }

  handleFocus() {
    const event = new CustomEvent('ods-focus', {
      bubbles: true,
      cancelable: false,
      composed: true
    });

    this.dispatchEvent(event);
  }

  handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
  }

  render() {
    return html`
    <button class="button" part="button" ?disabled=${this.disabled} type=${this.type} @blur=${this.handleBlur}
      @focus=${this.handleFocus} @click=${this.handleClick}>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    </button>
    `
  }

}

export default OdsButton

declare global {
  interface HTMLElementTagNameMap {
    'ods-button': OdsButton;
  }
}
