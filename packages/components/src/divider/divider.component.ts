import { CSSResultGroup, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { OdsBaseElement } from '../shared/base-element'
import styles from './styles/divider.styles'

@customElement('ods-divider')
export class OdsDivider extends OdsBaseElement {
  static styles: CSSResultGroup = styles

  render() {
    return html``
  }
}

export default OdsDivider

declare global {
  interface HTMLElementTagNameMap {
    'ods-divider': OdsDivider
  }
}
