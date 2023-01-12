import { CSSResultGroup, html } from 'lit'
import { customElement, eventOptions, property, query } from 'lit/decorators.js'
import { SlotController } from '../../shared/controller/SlotController'
import { OdsField } from '../field'
import styles from './styles/select.styles'

@customElement('ods-select')
export class OdsSelect extends OdsField {
  static styles: CSSResultGroup = styles

  @property({ type: Boolean, reflect: true }) autofocus = false
  @property() form?: string
  @property({ type: Boolean, reflect: true }) multiple = false
  @property() name?: string
  @property() value = ''

  @query('.select-field') nativeElement?: HTMLSelectElement

  focus(options?: FocusOptions): void {
    this.nativeElement?.focus(options)
  }

  click(): void {
    this.nativeElement?.focus()
  }

  blur(): void {
    this.nativeElement?.blur()
  }

  protected slotControler = new SlotController(this)

  get hasLeftIconSlot() {
    return this.slotControler.check('left-icon')
  }

  private shouldShrinkTheLabel() {
    return !!this.value || this.focused
  }

  protected getLabelState() {
    return this.staticLabel ? 'static' : this.shouldShrinkTheLabel() ? 'shrink' : 'grow'
  }

  protected handleClick() {
    if (this.disabled) return
    this.nativeElement?.focus()
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

  render() {
    return html``
  }
}

export default OdsSelect

declare global {
  interface HTMLElementTagNameMap {
    'ods-select': OdsSelect
  }
}
