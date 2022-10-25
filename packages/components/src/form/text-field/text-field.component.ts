import { CSSResultGroup, html, PropertyValues } from 'lit'
import { customElement, property, query, state } from 'lit/decorators.js'
import { live } from 'lit/directives/live.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { OdsField } from '../field'
import styles from './styles/text-field.styles'
import { OdsTextFieldType as Type, OdsTextFieldAlias as Alias } from './types'
import { SlotController } from '../../shared/controller/SlotController'

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
  @property({ type: Boolean, reflect: true }) staticLabel = false

  @query('.input') inputElement?: HTMLInputElement

  @state() hasFocus = false

  protected handleClick() {
    if (this.disabled) return
    this.inputElement?.focus()
  }

  protected handleFocus() {
    this.hasFocus = true
    this.emit('ods-focus')
  }

  protected handleBlur() {
    this.hasFocus = false
    this.emit('ods-blur')
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
      @focus=${this.handleFocus}
      @blur=${this.handleBlur}
      @input=${this.handleInput}
    />`
  }

  protected renderContent() {
    return this.alias === 'input' ? this.renderInput() : this.renderTextarea()
  }

  protected getLabelState() {
    return this.staticLabel
      ? 'default'
      : !!this.value || this.hasFocus || !!this.placeholder || this.type === 'date'
      ? 'shrink'
      : 'grow'
  }

  protected firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties)
    if (this.inputElement) {
      this.inputElement.value = this.value
    }
  }

  private handleInput() {
    this.value = this.inputElement?.value || ''
    this.emit('ods-change', { detail: this.value })
  }

  private slotControler = new SlotController(this)

  render() {
    const hasLeftIconSlot = this.slotControler.check('left-icon')
    return html`
      <ods-field
        .label=${this.label}
        labelState=${this.getLabelState()}
        appearance=${this.appearance}
        ?hasLeftIcon=${hasLeftIconSlot}
        ?disabled=${this.disabled}
        ?required=${this.required}
        ?invalid=${this.invalid}
        ?valid=${this.valid}
        ?pill=${this.pill}
        ?square=${this.square}
        ?focused=${this.hasFocus}
        @click=${this.handleClick}
      >
        ${this.renderContent()}
        <slot slot="left-icon" name="left-icon"></slot>
        <slot slot="right-icon" name="right-icon"></slot>
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
