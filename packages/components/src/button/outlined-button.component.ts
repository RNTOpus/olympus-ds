import { CSSResultGroup } from 'lit'
import { customElement } from 'lit/decorators.js'
import OdsButton from './button.component'

import outlinedStyles from './styles/outlined-button.styles'

@customElement('ods-outlined-button')
export class OdsOutlinedButton extends OdsButton {
  static styles: CSSResultGroup = outlinedStyles
}

export default OdsOutlinedButton

declare global {
  interface HTMLElementTagNameMap {
    'ods-outlined-button': OdsOutlinedButton
  }
}
