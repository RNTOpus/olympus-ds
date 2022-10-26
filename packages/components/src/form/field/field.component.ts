import { CSSResultGroup, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { OdsBaseElement } from '../../shared/base-element'
import { OdsLabelState as LabelState, OdsFieldAppearance as Appearance, OdsTextFieldAlias as Alias } from './types'
import styles from './styles/root.styles'
import { renderIcon } from '../../shared/icon/render'

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
  @property({ type: Boolean }) emptyable = false
  @property({ type: Boolean }) isPasswordField = false
  @property({ type: Boolean }) passwordIsVisible = false
  @property({ type: String, attribute: 'as', reflect: true }) alias: Alias = 'input'


  protected renderLabel() {
    const labelText = this.label ?? ''
    const optionalAsterisk = this.required && labelText ? ' *' : ''
    return html`<span class="label" part="label">${labelText + optionalAsterisk}</span>`
  }

  private handleClickEmptyIconButton() {
    if (this.disabled) return
    this.emit('ods-empty-click')
  }

  private renderEmptyIconButton() {
    return html`<button class="icon-button" @click=${this.handleClickEmptyIconButton}>
      ${renderIcon('close')}
    </button>`
  }

  private handleClickEyeIconButton() {
    if (this.disabled) return
    this.emit('ods-eye-click')
  }

  private renderEyeIconButton() {
    return html`<button class="icon-button" @click=${this.handleClickEyeIconButton}>
      ${renderIcon(this.passwordIsVisible ? 'visibilityOff' : 'visibility')}
    </button>`
  }

  protected renderRightIcon() {
    if (this.isPasswordField) return this.renderEyeIconButton();
    if (!this.focused) {
      if (this.invalid) return renderIcon('cancel')
      if (this.valid) return renderIcon('checkCircle')
      if (this.emptyable) return this.renderEmptyIconButton()
    };
    return html`<slot name="right-icon"></slot>`
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
        <span class="icon -right"> ${this.renderRightIcon()} </span>
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
      <span class="container"> ${this.renderLabel()} ${this.renderField()} ${this.renderHelperText()} </span>
    `
  }
}

export default OdsField

declare global {
  interface HTMLElementTagNameMap {
    'ods-field': OdsField
  }
}
