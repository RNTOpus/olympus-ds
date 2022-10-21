import { CSSResultGroup, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { OdsBaseElement } from '../../shared/base-element'
import styles from './styles/helper-text.styles'

@customElement('ods-helper-text')
export class OdsHelperText extends OdsBaseElement {
  static styles: CSSResultGroup = styles

  render() {
    return html``
  }
}

export default OdsHelperText

declare global {
  interface HTMLElementTagNameMap {
    'ods-helper-text': OdsHelperText
  }
}
