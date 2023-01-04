import { CSSResultGroup, html, PropertyValues } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { OdsBaseElement } from '../shared/base-element'
import styles from './styles/toast.styles'
import type { OdsToastVariant as Variant, OdsToastPosition as Position } from './types'

@customElement('ods-toast')
export class OdsToast extends OdsBaseElement {
  static styles: CSSResultGroup = styles

  @property({ type: Boolean, reflect: true }) open = false

  @property({ reflect: true }) variant: Variant = 'primary'

  @property({ reflect: true }) position: Position = 'relative'

  @property({ reflect: true }) title = ''

  @property({ type: Number, reflect: true }) timeout = 6000

  @property({ type: Boolean, reflect: true }) outline = false

  @state() private showingTime: NodeJS.Timeout | null = null

  handleClose() {
    this.close()
  }

  public close(): void {
    this.showingTime && clearTimeout(this.showingTime)
    this.open = false
  }

  render() {
    return html`
      <div class="component" role="status">
        <div class="body">
          <slot name="icon" class="icon"></slot>
          <div class="content">
            <h1 class="content-title">${this.title}</h1>
            <slot></slot>
          </div>
        </div>
        <div class="close">
          <button class="close-button" @click=${this.handleClose}>x</button>
        </div>
      </div>
    `
  }

  updated(changes: PropertyValues): void {
    if (changes.has('open')) {
      this.startTimeout()
    }
  }

  startTimeout() {
    if (this.open && this.timeout > 0) {
      this.showingTime = setTimeout(() => this.close(), this.timeout)
    }
  }
}

export default OdsToast

declare global {
  interface HTMLElementTagNameMap {
    'ods-toast': OdsToast
  }
}
