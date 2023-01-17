import { CSSResultGroup, PropertyValues } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { OdsBaseElement } from '../shared/base-element'
import styles from './styles/divider.styles'

/**
 * @summary Dividers are used to visually separate or group elements.
 *
 * @cssproperty --ods-divider-color - The color of the divider.
 * @cssproperty --ods-divider-width - The width of the divider.
 * @cssproperty --ods-divider-spacing - The spacing of the divider.
 */

@customElement('ods-divider')
export class OdsDivider extends OdsBaseElement {
  static styles: CSSResultGroup = styles

  @property({ type: Boolean, reflect: true }) vertical = false;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'separator');
  }

  willUpdate(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('vertical')) {
      this.setAttribute('aria-orientation', this.vertical ? 'vertical' : 'horizontal');
    }
  }

}

export default OdsDivider

declare global {
  interface HTMLElementTagNameMap {
    'ods-divider': OdsDivider
  }
}
