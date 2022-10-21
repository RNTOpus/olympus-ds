import { CSSResultGroup, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { OdsBaseElement } from '../../shared/base-element'
import styles from './styles/label.styles'

@customElement('ods-label')
export class OdsLabel extends OdsBaseElement {
  static styles: CSSResultGroup = styles

  render() {
    return html``
  }
}

export default OdsLabel

declare global {
  interface HTMLElementTagNameMap {
    'ods-label': OdsLabel
  }
}
