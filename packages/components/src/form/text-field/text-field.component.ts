import { CSSResultGroup, html } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { live } from 'lit/directives/live.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { OdsField } from '../field'
import styles from './styles/text-field.styles'
import { OdsTextFieldType as Type, OdsTextFieldAlias as Alias } from './types'

@customElement('ods-text-field')
export class OdsTextField extends OdsField {
  static styles: CSSResultGroup = styles

  @property({ type: String }) label?: string

  @property() value = ''
  @property() placeholder = ''
  @property({ type: String, reflect: true }) name = ''
  @property({ type: String }) type: Type = 'text'
  @property({ type: String }) alias: Alias = 'input'
  @property() minlength?: number
  @property() maxlength?: number
  @property() min?: number | string
  @property() max?: number | string
  @property({ type: Boolean, reflect: true }) readonly = false
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ type: Boolean, reflect: true }) required = false

  @query('.input') inputElement?: HTMLInputElement

  protected handleClick(event: MouseEvent) {
    console.log(event)
    if (this.disabled) {
      return
    }
    this.inputElement?.focus()
  }

  protected renderTextarea() {
    return html`<textarea>${this.value}</textarea>`
  }

  protected renderInput() {
    return html`<input
      class="input"
      minlength=${ifDefined(this.minlength)}
      maxlength=${ifDefined(this.maxlength)}
      min=${ifDefined(this.min)}
      max=${ifDefined(this.max)}
      ?disabled=${this.disabled}
      ?readonly=${this.readonly}
      ?required=${this.required}
      type=${this.type}
      placeholder=${this.placeholder}
      .value=${live(this.value)}
    />`
  }

  protected renderContent() {
    return this.alias === 'input' ? this.renderInput() : this.renderTextarea()
  }

  render() {
    return html`
      <ods-field
        .label=${this.label}
        .disabled=${this.disabled}
        .required=${this.required}
        .rounded=${this.rounded}
        .variant=${this.variant}
        @click=${this.handleClick}
      >
        ${this.renderContent()}
        <slot slot="prefix" name="prefix"></slot>
        <slot slot="suffix" name="suffix"></slot>
        <slot slot="helper-text" name="helper-text"></slot>
        <slot slot="helper-text-end" name="helper-text-end"></slot>
      </ods-field>
    `
  }
}

export default OdsTextField

declare global {
  interface HTMLElementTagNameMap {
    'ods-text-field': OdsTextField
  }
}
