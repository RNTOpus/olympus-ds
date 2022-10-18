import { CSSResultGroup, html } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { OdsBaseElement } from '../shared/base-element'
import type {
  OdsButtonSize as Size,
  OdsButtonType as Type,
  OdsButtonVariant as Variant,
  OdsRoundedButton as Rounded
} from './button.types'
import styles from './button.styles'

@customElement('ods-button')
export class OdsButton extends OdsBaseElement {
  static styles: CSSResultGroup = styles

  @query('.button') buttonElement?: HTMLButtonElement

  @property({ reflect: true }) variant: Variant = 'primary'

  @property({ reflect: true }) size: Size = 'normal'

  @property({ reflect: true }) rounded: Rounded = 'standard'

  @property({ type: Boolean, reflect: true }) disabled = false

  @property({ type: Boolean, reflect: true }) outlined = false

  @property({ type: Boolean, reflect: true }) fully = false

  @property({ type: Boolean, reflect: true }) ghost = false

  @property() type: Type = 'button'

  click(): void {
    this.buttonElement?.click()
  }

  focus(options?: FocusOptions): void {
    this.buttonElement?.focus(options)
  }

  blur(): void {
    this.buttonElement?.blur()
  }

  handleBlur() {
    this.emit('ods-blur')
  }

  handleFocus() {
    this.emit('ods-focus')
  }

  handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault()
      event.stopPropagation()
      return
    }
  }

  render() {
    return html`
      <button
        class="button"
        part="button"
        type=${this.type}
        ?disabled=${this.disabled}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        tabindex=${this.disabled ? '-1' : '0'}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <slot name="prefix"></slot>
        <span part="label" class="label">
          <slot></slot>
        </span>
        <slot name="suffix"></slot>
      </button>
    `
  }
}

export default OdsButton

declare global {
  interface HTMLElementTagNameMap {
    'ods-button': OdsButton
  }
}
