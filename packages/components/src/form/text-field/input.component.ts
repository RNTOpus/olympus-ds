import { CSSResultGroup, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { live } from 'lit/directives/live.js'
import styles from './styles/text-field.styles'
import { OdsInputTemplate } from './templates'

/**
 * @dependency ods-field
 *
 * @event ods-blur - Emitted when the field loses focus.
 * @event ods-focus - Emitted when the field gains focus.
 * @event ods-change - Emitted when the field value is changed by the user.
 * @event ods-input - Emitted when the field receives input and its value changes.
 * @event ods-clear - Emitted when the clear button is activated.
 *
 * @slot left-icon - Used to prepend an icon to the field.
 * @slot right-icon - Used to append an icon to the field.
 * @slot helper-text - Used to insert the content below the field.
 * @slot helper-text-end - Used to insert the content below the field on the right side.
 *
 * @csspart wrapper - Access the ods-field component.
 * @csspart label - The field label.
 * @csspart icon-button - The right icon button to toggle password or clear field.
 * @csspart field - The input element.
 *
 */
@customElement('ods-input')
export class OdsTextField extends OdsInputTemplate {
  static styles: CSSResultGroup = styles
  render() {
    return html`
      <ods-field
        part="wrapper"
        .label=${this.label}
        labelState=${this.getLabelState()}
        appearance=${this.appearance}
        ?hasLeftIcon=${this.hasLeftIconSlot}
        ?disabled=${this.disabled}
        ?required=${this.required}
        ?invalid=${this.invalid}
        ?valid=${this.valid}
        ?pill=${this.pill}
        ?square=${this.square}
        ?focused=${this.hasFocus}
        ?isPasswordField=${this.isPasswordField}
        ?passwordIsVisible=${this.passwordIsVisible}
        ?clearable=${this.clearable && live(this.value)}
        @click=${this.handleClick}
        @ods-eye-click=${this.handleEyeClick}
        @ods-clear-click=${this.handleClearClick}
      >
        ${this.renderInput()}
        <slot slot="left-icon" name="left-icon"></slot>
        <slot slot="right-icon" name="right-icon"></slot>
        <slot slot="helper-text" name="helper-text"></slot>
        <slot slot="helper-text-end" name="helper-text-end"></slot>
      </ods-field>
    `
  }

  connectedCallback() {
    super.connectedCallback()
    this.isPasswordField = this.type === 'password'
  }
}

export default OdsTextField

declare global {
  interface HTMLElementTagNameMap {
    'ods-input': OdsTextField
  }
}
