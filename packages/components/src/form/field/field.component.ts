import { CSSResultGroup, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { OdsRoundedField as Rounded, OdsFieldVariant as Variant } from './types'
import { OdsBaseElement } from '../../shared/base-element'
import styles from './styles/root.styles'

@customElement('ods-field')
export class OdsField extends OdsBaseElement {
  static styles: CSSResultGroup = styles

  @property({ type: String }) label?: string
  @property({ type: String }) variant: Variant = 'default'
  @property({ type: String }) rounded: Rounded = 'default'
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ type: Boolean, reflect: true }) required = false

  protected renderLabel() {
    const labelText = this.label ?? ''
    const optionalAsterisk = this.required && labelText ? '*' : ''
    return html`<span class="label" part="label">${labelText + optionalAsterisk}</span>`
  }

  protected renderField() {
    return html`
      <span class="field">
        <span class="prefix">
          <slot name="prefix"></slot>
        </span>
        <span class="middle">
          <slot></slot>
        </span>
        <span class="suffix">
          <slot name="suffix"></slot>
        </span>
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
      <span class="container">
        ${this.renderLabel()}
        ${this.renderField()}
        ${this.renderHelperText()}
      </span>
    `
  }
}

export default OdsField

declare global {
  interface HTMLElementTagNameMap {
    'ods-field': OdsField
  }
}
