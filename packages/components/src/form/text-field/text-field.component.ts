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

  /** Common native attributes */
  @property() autocomplete?: 'off' | 'on'
  @property({ type: Boolean, reflect: true }) autofocus = false
  @property() enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
  @property() form?: string
  @property({ type: Number }) maxlength?: number
  @property({ type: Number }) minlength?: number
  @property() name?: string
  @property() placeholder?: string
  @property({ type: Boolean, reflect: true }) readonly = false
  @property({ type: Boolean, reflect: true }) spellcheck = false
  @property() value = ''

  /** Native input attributes */
  @property() autocorrect?: 'off' | 'on'
  @property() inputmode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'
  @property() pattern?: string
  @property() max?: number | string
  @property() min?: number | string
  @property() step?: number | 'any'
  @property({ type: String }) type: Type = 'text'

  /** Native textarea attributes */
  @property({ type: String }) resize: Resize = 'vertical'

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

  private handleClearClick() {
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
      class="input -textarea"
      id=${this.name ? this.name + 'Field' : 'textareaField'}
      style=${styleMap({ resize: this.resize })}
      autocomplete=${ifDefined(this.type === 'password' ? 'off' : this.autocomplete)}
      ?autofocus=${this.autofocus}
      ?disabled=${this.disabled}
      enterkeyhint=${ifDefined(this.enterkeyhint)}
      form=${ifDefined(this.form)}
      maxlength=${ifDefined(this.maxlength)}
      minlength=${ifDefined(this.minlength)}
      name=${ifDefined(this.name)}
      placeholder=${ifDefined(this.placeholder)}
      ?readonly=${this.readonly}
      ?required=${this.required}
      ?spellcheck=${this.spellcheck}
      .value=${live(this.value)}
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
    return html` <input
      class="input"
      id=${this.name ? this.name + 'Field' : 'inputField'}
      autocomplete=${ifDefined(this.type === 'password' ? 'off' : this.autocomplete)}
      autocorrect=${ifDefined(this.type === 'password' ? 'off' : this.autocorrect)}
      ?autofocus=${this.autofocus}
      ?disabled=${this.disabled}
      enterkeyhint=${ifDefined(this.enterkeyhint)}
      form=${ifDefined(this.form)}
      inputmode=${ifDefined(this.inputmode)}
      max=${ifDefined(this.max)}
      maxlength=${ifDefined(this.maxlength)}
      min=${ifDefined(this.min)}
      minlength=${ifDefined(this.minlength)}
      name=${ifDefined(this.name)}
      pattern=${ifDefined(this.pattern)}
      placeholder=${ifDefined(this.placeholder)}
      ?readonly=${this.readonly}
      ?required=${this.required}
      ?spellcheck=${this.spellcheck}
      step=${ifDefined(this.step as number)}
      type=${this.type}
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
        ?clearable=${this.clearable && live(this.value)}
        @click=${this.handleClick}
        @ods-eye-click=${this.handleEyeClick}
        @ods-empty-click=${this.handleClearClick}
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
    this.isPasswordField = this.type === 'password'
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
