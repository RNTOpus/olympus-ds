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
  @property({ type: Boolean, reflect: true }) multiple = false;
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
    return html`
      <ods-field
        part="wrapper"
        .label=${this.label}
        labelState=${this.getLabelState()}
        appearance=${this.appearance}
        ?hasLeftIcon=${this.hasLeftIconSlot}
        ?disabled=${this.disabled}
        ?required=${this.required}
        ?invalid=${this.invalid}
        ?valid=${this.valid}
        ?pill=${this.pill}
        ?square=${this.square}
        ?focused=${this.focused}
        @click=${this.handleClick}
      >
        <select>
          <slot name="options"></slot>
        </select>
        <slot slot="left-icon" name="left-icon"></slot>
        <span slot="right-icon">

        </span>
        <slot slot="helper-text" name="helper-text"></slot>
        <slot slot="helper-text-end" name="helper-text-end"></slot>
      </ods-field>
    `
  }
}

export default OdsSelect

declare global {
  interface HTMLElementTagNameMap {
    'ods-select': OdsSelect
  }
}
