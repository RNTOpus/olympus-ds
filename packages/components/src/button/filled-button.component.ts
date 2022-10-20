import { CSSResultGroup } from 'lit'
import { customElement } from 'lit/decorators.js'
import OdsButton from './button.component'

import filledStyles from './styles/filled-button.styles'

@customElement('ods-filled-button')
export class OdsFilledButton extends OdsButton {
  static styles: CSSResultGroup = filledStyles
}

export default OdsFilledButton

declare global {
  interface HTMLElementTagNameMap {
    'ods-filled-button': OdsFilledButton
  }
}
