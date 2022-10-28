import { CSSResultGroup, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { live } from 'lit/directives/live.js'
import { OdsTextareaTemplate } from './templates'

import textFieldStyles from './styles/text-field.styles'
import styles from './styles/textarea-field.styles'

/**
 * @dependency ods-field
 *
 * @event ods-blur - Emitted when the field loses focus.
 * @event ods-focus - Emitted when the field gains focus.
 * @event ods-change - Emitted when the field value is being changed.
 * @event ods-empty-click - Emitted when the clear field button is clicked
 * @event ods-eye-click - Emitted when the password view toggle button is clicked
 *
 * @slot left-icon - Used to prepend an icon to the field.
 * @slot right-icon - Used to append an icon to the field.
 * @slot helper-text - Used to insert the content below the field.
 * @slot helper-text-end - Used to insert the content below the field on the right side.
 *
 * @csspart wrapper - Access the ods-field component.
 *
 */

@customElement('ods-textarea')
export class OdsTextareaField extends OdsTextareaTemplate {
  static styles: CSSResultGroup[] = [textFieldStyles, styles]
  render() {
    return html`
      <ods-field
        part="wrapper"
        .label=${this.label}
        labelState=${this.getLabelState()}
        appearance=${this.appearance}
        as="textarea"
        ?hasLeftIcon=${this.hasLeftIconSlot}
        ?disabled=${this.disabled}
        ?required=${this.required}
        ?invalid=${this.invalid}
        ?valid=${this.valid}
        ?pill=${this.pill}
        ?square=${this.square}
        ?focused=${this.hasFocus}
        ?clearable=${this.clearable && live(this.value)}
        @click=${this.handleClick}
        @ods-empty-click=${this.handleClearClick}
      >
        ${this.renderTextarea()}
        <slot slot="left-icon" name="left-icon"></slot>
        <slot slot="right-icon" name="right-icon"></slot>
        <slot slot="helper-text" name="helper-text"></slot>
        <slot slot="helper-text-end" name="helper-text-end"></slot>
      </ods-field>
    `
  }
}

export default OdsTextareaField

declare global {
  interface HTMLElementTagNameMap {
    'ods-textarea': OdsTextareaField
  }
}
