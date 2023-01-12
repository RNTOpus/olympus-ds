import { CSSResultGroup, html, PropertyValues } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import type OdsMenu from './menu.component'

import baseStyles from '../shared/styles/base-list-item-styles'
import styles from './styles/menu-item.styles'
import { OdsBaseElement } from '../shared/base-element'
import { getSelectableIcon } from '../shared/directive/icon-state.directive'
import { SlotController } from '../shared/controller/SlotController'

/**
 * @element ods-menu-item
 *
 * @slot - The menu item's label.
 * @slot prefix - Used to prepend an icon or similar element to the menu item.
 * @slot suffix - Used to append an icon or similar element to the menu item.
 *
 * @csspart label - The menu item's label.
 *
 */

@customElement('ods-menu-item')
export class OdsMenuItem extends OdsBaseElement {
  static styles: CSSResultGroup = [baseStyles, styles]

  static instanceCount = 0

  @property({ type: Boolean, reflect: true })
  disabled = false

  @property({ type: Boolean, reflect: true })
  active = false

  @property({ type: Boolean, reflect: true })
  selected = false

  @property({ type: Boolean, reflect: true })
  focused = false

  @property()
  label?: string

  @property({ type: String })
  value = ''

  private parentMenu?: OdsMenu
  private readonly defaultRole = 'menuitem'

  connectedCallback(): void {
    super.connectedCallback()
    this.parentMenu = this.parentElement?.localName === 'ods-menu' ? (this.parentElement as OdsMenu) : undefined

    this.setAttribute('tabindex', '-1')
    this.setAttribute('dir', this.parentMenu?.dir || 'ltr')
    this.setAttribute('role', this.parentMenu?.itemRole || this.defaultRole)

    this.disabled && this.setAttribute('aria-disabled', 'true')

  }

  protected firstUpdated(changes: PropertyValues) {
    super.firstUpdated(changes)

    if (!this.hasAttribute('id')) {
      this.id = `ods-menu-item-${OdsMenuItem.instanceCount++}`
    }

    if (this.parentMenu?.controller?.selectable) {
      this.removeAttribute('active')
    } else {
      this.removeAttribute('selected')
    }
  }

  protected updated(changes: PropertyValues<this>): void {
    super.updated(changes)
    if (changes.has('disabled')) {
      this.disabled ? this.setAttribute('aria-disabled', 'true') : this.removeAttribute('aria-disabled')
    }
  }

  protected renderPrefixContent() {
    if (this.isCheckbox || this.isRadio) {
      return getSelectableIcon(this.isCheckbox, this.selected)
    }
    return html`<slot name="prefix"></slot>`
  }

  protected readonly slotControler = new SlotController(this)

  protected get isCheckbox() {
    const role = this.getAttribute('role')
    return role?.includes('checkbox')
  }

  protected get isRadio() {
    const role = this.getAttribute('role')
    return role?.includes('radio')
  }

  protected get hasPrefixSlot() {
    return this.slotControler.check('prefix')
  }

  protected get hasDefaultSlot() {
    return this.slotControler.checkDefault()
  }

  protected get hasSuffixSlot() {
    return this.slotControler.check('suffix')
  }

  render() {
    return html`
      <span
        class="prefix${classMap({
          'prefix--has-content': this.isCheckbox || this.isRadio || this.hasPrefixSlot
        })}"
      >
        ${this.renderPrefixContent()}
      </span>
      <div
        class="label${classMap({
          'label--has-content': this.hasDefaultSlot
        })}"
        part="label"
      >
        <slot></slot>
      </div>
      <span
        class="suffix${classMap({
          'suffix--has-content': this.hasSuffixSlot
        })}"
      >
        <slot name="suffix"></slot>
      </span>
    `
  }
}

export default OdsMenuItem

declare global {
  interface HTMLElementTagNameMap {
    'ods-menu-item': OdsMenuItem
  }
}
