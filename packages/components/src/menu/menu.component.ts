import { CSSResultGroup, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { OdsBaseElement } from '../shared/base-element'
import styles from './styles/menu.styles'

@customElement('ods-menu')
export class OdsMenu extends OdsBaseElement {
  static styles: CSSResultGroup = styles

  render() {
    return html``
  }
}

export default OdsMenu

declare global {
  interface HTMLElementTagNameMap {
    'ods-menu': OdsMenu
  }
}
