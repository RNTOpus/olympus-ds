import { CSSResultGroup, html } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { OdsBaseElement } from '../shared/base-element'
import type {
  OdsButtonSize as Size,
  OdsButtonType as Type,
  OdsButtonVariant as Variant,
  OdsRoundedButton as Rounded
} from './types'
import styles from './styles/button.common.styles'

/**
 * @event ods-blur - Emitted when the button loses focus.
 * @event ods-focus - Emitted when the button gains focus.
 *
 * @slot - The button's label.
 * @slot prefix - Used to prepend an icon or similar element to the button.
 * @slot suffix - Used to append an icon or similar element to the button.
 *
 * @csspart button - The component's internal wrapper.
 * @csspart label - The button's label.
 */

@customElement('ods-button')
export class OdsButton extends OdsBaseElement {
  static styles: CSSResultGroup = styles

  @query('.button') buttonElement?: HTMLButtonElement

  @property({ reflect: true }) variant: Variant = 'primary'

  @property({ reflect: true }) size: Size = 'normal'

  @property({ reflect: true }) rounded: Rounded = 'standard'

  @property() form?: string

  @property({ type: Boolean, reflect: true }) disabled = false

  @property({ type: Boolean, reflect: true }) outline = false

  @property({ type: Boolean, reflect: true }) fully = false

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

    const formId = this.form
    const formElement = formId
      ? (document.getElementById(formId) as HTMLFormElement | null)
      : (this.closest('form') as HTMLFormElement | null)

    if (this.type === 'submit') {
      formElement?.requestSubmit()
    }

    if (this.type === 'reset') {
      formElement?.reset()
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
