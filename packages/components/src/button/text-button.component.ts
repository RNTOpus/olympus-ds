import { CSSResultGroup } from 'lit'
import { customElement } from 'lit/decorators.js'
import OdsButton from './button.component'

import textStyles from './styles/text-button.styles'

@customElement('ods-text-button')
export class OdsTextButton extends OdsButton {
  static styles: CSSResultGroup = textStyles
}

export default OdsTextButton

declare global {
  interface HTMLElementTagNameMap {
    'ods-text-button': OdsTextButton
  }
}
