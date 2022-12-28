import { CSSResultGroup, html, PropertyValues } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { OdsBaseElement } from '../shared/base-element'
import styles from './styles/toast.styles'
import type { OdsToastVariant as Variant } from './types'

@customElement('ods-toast')
export class OdsToast extends OdsBaseElement {
  static styles: CSSResultGroup = styles

  @property({ type: Boolean, reflect: true }) open = false

  @property({ reflect: true }) variant: Variant = 'primary'

  @property({ reflect: true }) title = ''

  handleClose() {
    this.close()
  }

  public close(): void {
    this.open = false
  }

  render() {
    return html`
      <div class="body">
        <slot name="icon" class="icon"></slot>
        <div class="content">
          <h1 class="content-title">${this.title}</h1>
          <slot></slot>
        </div>
      </div>
      <div class="close">
        <button class="close-button" @click=${this.handleClose}>X</button>
      </div>
    `
  }

  updated(changes: PropertyValues): void {
    console.log('changes', changes)

    if (changes.has('open')) {
      console.log('Changes in open', this.open)
    }
    if (changes.has('timeout')) {
      console.log('asdasd')
    }
  }
}

export default OdsToast

declare global {
  interface HTMLElementTagNameMap {
    'ods-toast': OdsToast
  }
}
