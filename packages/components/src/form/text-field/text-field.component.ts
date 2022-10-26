import { CSSResultGroup, html, PropertyValues } from 'lit'
import { customElement, property, query, state } from 'lit/decorators.js'
import { live } from 'lit/directives/live.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { styleMap } from 'lit/directives/style-map.js'
import { OdsField } from '../field'
import styles from './styles/text-field.styles'
import { OdsTextareaFieldResize as Resize, OdsTextFieldType as Type } from './types'
import { SlotController } from '../../shared/controller/SlotController'

@customElement('ods-text-field')
export class OdsTextField extends OdsField {
  static styles: CSSResultGroup = styles

  @property() placeholder?: string
  @property() name?: string
  @property() value = ''
  @property({ type: String }) type: Type = 'text'
  @property({ type: String }) resize: Resize = 'vertical'
  @property() minlength?: number
  @property() maxlength?: number
  @property() min?: number | string
  @property() max?: number | string
  @property({ type: Boolean, reflect: true }) readonly = false
  @property({ type: Boolean }) staticLabel = false

  @query('.input') inputElement?: HTMLInputElement

  @state() private hasFocus = false

  @state() private textareaAutosizeTime: NodeJS.Timeout | null = null

  private handleClick() {
    if (this.disabled) return
    this.inputElement?.focus()
  }

  private handleEyeClick() {
    this.passwordIsVisible = !this.passwordIsVisible
    this.type = this.passwordIsVisible ? 'text' : 'password'
  }

  private handleEmptyClick() {
    this.value = ''
  }

  private handleFocus() {
    this.hasFocus = true
    this.emit('ods-focus')
  }

  private handleBlur() {
    this.hasFocus = false
    this.emit('ods-blur')
  }

  private textareaAutosize() {
    this.textareaAutosizeTime = setTimeout(() => {
      if (this.inputElement) {
        this.inputElement.style.cssText = `height: auto`
        this.inputElement.style.cssText = `height: ${this.inputElement?.scrollHeight}px`
      }
    }, 0)
  }

  private renderTextarea() {
    return html`<textarea
      class="input"
      id=${this.name ? this.name + 'Field' : 'textareaField'}
      maxlength=${ifDefined(this.maxlength)}
      placeholder=${ifDefined(this.placeholder)}
      name=${ifDefined(this.name)}
      ?disabled=${this.disabled}
      ?readonly=${this.readonly}
      ?required=${this.required}
      .value=${live(this.value)}
      style=${styleMap({ resize: this.resize })}
      @focus=${this.handleFocus}
      @blur=${this.handleBlur}
      @input=${this.handleInput}
      @keydown=${this.textareaAutosize}
    >
      ${this.value}
    </textarea
    >`
  }

  private renderInput() {
    return html`<input
      class="input"
      id=${this.name ? this.name + 'Field' : 'inputField'}
      minlength=${ifDefined(this.minlength)}
      maxlength=${ifDefined(this.maxlength)}
      min=${ifDefined(this.min)}
      max=${ifDefined(this.max)}
      ?disabled=${this.disabled}
      ?readonly=${this.readonly}
      ?required=${this.required}
      type=${this.type}
      placeholder=${ifDefined(this.placeholder)}
      .value=${live(this.value)}
      @focus=${this.handleFocus}
      @blur=${this.handleBlur}
      @input=${this.handleInput}
    />`
  }

  private renderContent() {
    return this.alias === 'input' ? this.renderInput() : this.renderTextarea()
  }

  private shouldShrinkTheLabel() {
    return (
      !!this.value ||
      !!this.placeholder ||
      this.hasFocus ||
      this.type === 'date' ||
      this.type === 'time' ||
      this.type === 'datetime-local'
    )
  }

  private getLabelState() {
    return this.staticLabel ? 'default' : this.shouldShrinkTheLabel() ? 'shrink' : 'grow'
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
        as=${this.alias}
        ?hasLeftIcon=${hasLeftIconSlot}
        ?disabled=${this.disabled}
        ?required=${this.required}
        ?invalid=${this.invalid}
        ?valid=${this.valid}
        ?pill=${this.pill}
        ?square=${this.square}
        ?focused=${this.hasFocus}
        ?isPasswordField=${this.isPasswordField}
        ?passwordIsVisible=${this.passwordIsVisible}
        ?emptyable=${this.emptyable && live(this.value)}
        @click=${this.handleClick}
        @ods-eye-click=${this.handleEyeClick}
        @ods-empty-click=${this.handleEmptyClick}
      >
        ${this.renderContent()}
        <slot slot="left-icon" name="left-icon"></slot>
        <slot slot="right-icon" name="right-icon"></slot>
        <slot slot="helper-text" name="helper-text"></slot>
        <slot slot="helper-text-end" name="helper-text-end"></slot>
      </ods-field>
    `
  }

  connectedCallback() {
    super.connectedCallback()
    this.isPasswordField = this.type === 'password';
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.textareaAutosizeTime && clearTimeout(this.textareaAutosizeTime)
  }
}

export default OdsTextField

declare global {
  interface HTMLElementTagNameMap {
    'ods-text-field': OdsTextField
  }
}
