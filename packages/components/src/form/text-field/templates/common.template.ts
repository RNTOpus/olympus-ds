import { OdsField } from '../../field'
import { eventOptions, property, query } from 'lit/decorators.js'
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
  @property({ reflect: true }) type?: Type
  @property() value = ''

  @query('.text-field') nativeElement?: HTMLInputElement | HTMLTextAreaElement

  focus(options?: FocusOptions): void {
    this.nativeElement?.focus(options)
  }

  click(): void {
    this.nativeElement?.focus()
  }

  blur(): void {
    this.nativeElement?.blur()
  }

  clear(event?: MouseEvent): void {
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
      this.focused ||
      this.type === 'date' ||
      this.type === 'time' ||
      this.type === 'datetime-local'
    )
  }

  protected getLabelState() {
    return this.staticLabel ? 'static' : this.shouldShrinkTheLabel() ? 'shrink' : 'grow'
  }

  protected handleClick() {
    if (this.disabled) return
    this.nativeElement?.focus()
  }

  protected handleEyeClick() {
    this.passwordIsVisible = !this.passwordIsVisible
    this.type = this.passwordIsVisible ? 'text' : 'password'
  }

  protected handleClearClick(event?: MouseEvent) {
    this.value = ''
    this.emit('ods-clear')
    this.nativeElement?.focus()

    event?.stopPropagation()
  }

  protected onFieldFocus() {
    this.focused = true
    this.emit('ods-focus')
  }

  protected onFieldBlur() {
    this.focused = false
    this.emit('ods-blur')
  }

  @eventOptions({ passive: true })
  protected handleInputChange() {
    this.value = this.nativeElement?.value || ''
  }
}
