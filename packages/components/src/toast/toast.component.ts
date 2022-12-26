import { CSSResultGroup, html } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { OdsBaseElement } from '../shared/base-element'
import styles from './styles/toast.styles'
import type { OdsToastVariant as Variant } from './types'

@customElement('ods-toast')
export class OdsToast extends OdsBaseElement {
  static styles: CSSResultGroup = styles

  @query('.button') buttonElement?: HTMLButtonElement

  @property({ reflect: true }) variant: Variant = 'primary'

  render() {
    return html`
      <div>
        <h1>Toast</h1>
      </div>
    `
  }
}

export default OdsToast

declare global {
  interface HTMLElementTagNameMap {
    'ods-toast': OdsToast
  }
}
