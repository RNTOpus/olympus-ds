import { OdsField } from '../../field'
import { property, query, state } from 'lit/decorators.js'
import { SlotController } from '../../../shared/controller/SlotController'
import type { OdsFieldEnterkeyhint as Enterkeyhint, OdsTextFieldType as Type } from '../types'

/**
 * @classdesc This class has properties, states and methods common to text-field and textarea-field
 *
 * @extends OdsField
 *
 * @event ods-blur - Emitted when the field loses focus.
 * @event ods-focus - Emitted when the field gains focus.
 * @event ods-change - Emitted when the field value is changed by the user.
 * @event ods-input - Emitted when the field receives input and its value changes.
 * @event ods-clear - Emitted when the clear button is activated.
 *
 */

export class OdsTextFieldCommonTemplate extends OdsField {
  @property() autocomplete?: 'off' | 'on'
  @property({ type: Boolean, reflect: true }) autofocus = false
  @property() enterkeyhint?: Enterkeyhint
  @property() form?: string
  @property({ type: Number }) maxlength?: number
  @property({ type: Number }) minlength?: number
  @property() name?: string
  @property() placeholder?: string
  @property({ type: Boolean, reflect: true }) readonly = false
  @property({ type: Boolean, reflect: true }) spellcheck = false
  @property({ reflect: true }) type: Type = 'text'
  @property() value = ''

  @state() protected hasFocus = false

  @query('.text-field') inputElement?: HTMLInputElement

  focus(options?: FocusOptions): void {
    this.inputElement?.focus(options)
  }

  blur(): void {
    this.inputElement?.blur()
  }

  clear(event: MouseEvent): void {
    this.handleClearClick(event)
  }

  protected slotControler = new SlotController(this)

  get hasLeftIconSlot() {
    return this.slotControler.check('left-icon')
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

  protected getLabelState() {
    return this.staticLabel ? 'default' : this.shouldShrinkTheLabel() ? 'shrink' : 'grow'
  }

  protected handleClick() {
    if (this.disabled) return
    this.inputElement?.focus()
  }

  protected handleEyeClick() {
    this.passwordIsVisible = !this.passwordIsVisible
    this.type = this.passwordIsVisible ? 'text' : 'password'
  }

  protected handleClearClick(event: MouseEvent) {
    this.value = ''
    this.emit('ods-clear')
    this.emit('ods-input')
    this.emit('ods-change')
    this.inputElement?.focus()

    event.stopPropagation()
  }

  protected handleFocus() {
    this.hasFocus = true
    this.emit('ods-focus')
  }

  protected handleBlur() {
    this.hasFocus = false
    this.emit('ods-blur')
  }

  protected handleInput() {
    this.value = this.inputElement?.value || ''
    this.emit('ods-input', { detail: this.value })
  }

  protected handleChange() {
    this.value = this.inputElement?.value || ''
    this.emit('ods-change', { detail: this.value })
  }
}
