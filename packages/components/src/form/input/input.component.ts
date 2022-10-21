import { CSSResultGroup, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { OdsBaseElement } from '../../shared/base-element'
import styles from './styles/input.styles'

@customElement('ods-input')
export class OdsInput extends OdsBaseElement {
  static styles: CSSResultGroup = styles

  @property({ type: String }) label?: string
  @property({ type: Boolean }) disabled?: boolean
  @property({ type: String }) variant?: string

  render() {
    return html``
  }
}

export default OdsInput

declare global {
  interface HTMLElementTagNameMap {
    'ods-input': OdsInput
  }
}
