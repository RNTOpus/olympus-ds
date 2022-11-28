import { CSSResultGroup, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { OdsBaseElement } from '../shared/base-element'
import styles from './styles/dropdown.styles'

@customElement('ods-dropdown')
export class OdsDropdown extends OdsBaseElement {
  static styles: CSSResultGroup = styles

  render() {
    return html``
  }
}

export default OdsDropdown

declare global {
  interface HTMLElementTagNameMap {
    'ods-dropdown': OdsDropdown
  }
}
