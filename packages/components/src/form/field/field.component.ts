import { CSSResultGroup, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { OdsBaseElement } from '../../shared/base-element'
import { OdsLabelState as LabelState, OdsFieldAppearance as Appearance } from './types'
import styles from './styles/root.styles'

@customElement('ods-field')
export class OdsField extends OdsBaseElement {
  static styles: CSSResultGroup = styles

  @property({ type: String }) label?: string
  @property({ type: String }) labelState?: LabelState = 'default'
  @property({ type: String }) appearance?: Appearance = 'outline'
  @property({ type: Boolean, reflect: true }) square = false
  @property({ type: Boolean, reflect: true }) pill = false
  @property({ type: Boolean, reflect: true }) invalid = false
  @property({ type: Boolean, reflect: true }) valid = false
  @property({ type: Boolean, reflect: true }) focused = false
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ type: Boolean, reflect: true }) required = false
  @property({ type: Boolean, reflect: true }) hasLeftIcon = false

  protected renderLabel() {
    const labelText = this.label ?? ''
    const optionalAsterisk = this.required && labelText ? ' *' : ''
    return html`<span class="label" part="label">${labelText + optionalAsterisk}</span>`
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
        <span class="icon -right">
          <slot name="right-icon"></slot>
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
