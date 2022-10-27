import { OdsField } from '../../field'
import { property, query, state } from 'lit/decorators.js'
import { SlotController } from '../../../shared/controller/SlotController'
import type { OdsFieldEnterkeyhint as Enterkeyhint, OdsTextFieldType as Type } from '../types'

/**
 * @classdesc This class has properties, states and methods common to text-field and textarea-field
 *
 * @extends OdsField
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
  @property({ type: String }) type: Type = 'text'
  @property() value = ''

  @state() protected hasFocus = false

  @query('.text-field') inputElement?: HTMLInputElement

  focus(options?: FocusOptions): void {
    this.inputElement?.focus(options)
  }

  blur(): void {
    this.inputElement?.blur()
  }

  protected slotControler = new SlotController(this)

  get hasLeftIconSlot() {
    return this.slotControler.check('left-icon')
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
    this.emit('ods-change', { detail: this.value })
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

  protected handleClearClick() {
    this.value = ''
  }
}
