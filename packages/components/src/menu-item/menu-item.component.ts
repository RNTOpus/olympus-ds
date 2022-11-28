import { CSSResultGroup, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { OdsBaseElement } from '../shared/base-element'
import styles from './styles/menu-item.styles'

@customElement('ods-menu-item')
export class OdsMenuItem extends OdsBaseElement {
  static styles: CSSResultGroup = styles

  render() {
    return html``
  }
}

export default OdsMenuItem

declare global {
  interface HTMLElementTagNameMap {
    'ods-menu-item': OdsMenuItem
  }
}
