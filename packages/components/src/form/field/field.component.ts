import { CSSResultGroup, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { OdsBaseElement } from '../../shared/base-element'
import { OdsLabelState as LabelState, OdsFieldAppearance as Appearance, OdsTextFieldAlias as Alias } from './types'
import styles from './styles/root.styles'
import { renderIcon } from '../../shared/icon/render'

/**
 * @summary This component is used as a wrapper for other components
 *
 * @access protected
 *
 * @extends OdsBaseElement
 *
 * @slot left-icon - Used to prepend an icon to the field.
 * @slot right-icon - Used to append an icon to the field.
 * @slot helper-text - Used to insert the content below the field.
 * @slot helper-text-end - Used to insert the content below the field on the right side.
 *
 * @csspart label - The field label.
 * @csspart icon-button - The right icon button to toggle password or clear field.
 *
 */

@customElement('ods-field')
export class OdsField extends OdsBaseElement {
  static styles: CSSResultGroup = styles

  @property({ type: String }) appearance?: Appearance = 'outline'
  @property({ type: String }) label?: string
  @property({ type: Boolean }) staticLabel = false
  @property({ type: Boolean, reflect: true }) square = false
  @property({ type: Boolean, reflect: true }) pill = false
  @property({ type: Boolean, reflect: true }) invalid = false
  @property({ type: Boolean, reflect: true }) valid = false
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ type: Boolean, reflect: true }) required = false
  @property({ type: Boolean, reflect: true }) clearable = false
  @property({ type: String, reflect: true }) protected labelState?: LabelState = 'default'
  @property({ type: Boolean, reflect: true }) protected focused = false
  @property({ type: Boolean }) protected hasLeftIcon = false
  @property({ type: Boolean }) protected isPasswordField = false
  @property({ type: Boolean }) protected passwordIsVisible = false
  @property({ type: String, attribute: 'as', reflect: true }) protected alias: Alias = 'input'

  protected renderLabel() {
    const labelText = this.label ?? ''
    const optionalAsterisk = this.required && labelText ? ' *' : ''
    return html`<span class="label" part="label">${labelText + optionalAsterisk}</span>`
  }

  private handleClickClearIconButton() {
    if (this.disabled) return
    this.emit('ods-clear-click', { composed: false })
  }

  private renderClearIconButton() {
    return html`<button class="icon-button" part="icon-button" @click=${this.handleClickClearIconButton}>
      ${renderIcon('close')}
    </button>`
  }

  private handleClickEyeIconButton() {
    if (this.disabled) return
    this.emit('ods-eye-click', { composed: false })
  }

  private renderEyeIconButton() {
    return html`<button class="icon-button" part="icon-button" @click=${this.handleClickEyeIconButton}>
      ${renderIcon(this.passwordIsVisible ? 'visibilityOff' : 'visibility')}
    </button>`
  }

  protected renderRightIcon() {
    if (this.isPasswordField) return this.renderEyeIconButton()
    if (!this.focused) {
      if (this.invalid) return renderIcon('cancel')
      if (this.valid) return renderIcon('checkCircle')
      if (this.clearable) return this.renderClearIconButton()
    }
    return html`<slot name="right-icon"></slot>`
  }

  protected renderField() {
    return html`
      <span class="field">
        <span class="icon -left">
          <slot name="left-icon"></slot>
        </span>
        <span class="middle">
          <slot></slot>
        </span>
        <span class="icon -right"> ${this.renderRightIcon()} </span>
      </span>
    `
  }

  protected renderHelperText() {
    return html`
      <span class="helper-text">
        <span class="start">
          <slot name="helper-text"></slot>
        </span>
        <span class="end">
          <slot name="helper-text-end"></slot>
        </span>
      </span>
    `
  }

  render() {
    return html`
      <span class="container"> ${this.renderLabel()} ${this.renderField()} ${this.renderHelperText()} </span>
    `
  }
}

export default OdsField

declare global {
  interface HTMLElementTagNameMap {
    'ods-field': OdsField
  }
}
