import { CSSResultGroup, html, PropertyValues } from 'lit'
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js'
import type { OdsMenuItem } from './menu-item.component'
import { OdsMenuAppearance } from './types'
import { OdsBaseElement } from '../shared/base-element'
import { ListHost, ListItem, ListOrientation, SelectionElement, SelectionType } from '../shared/types'
import { ListController } from '../shared/controller'

import baseStyles from '../shared/styles/base-list.styles'
import styles from './styles/menu.styles'

/**
 * Olympus Menu Component
 * @element ods-menu
 *
 * @event ods-change - Emitted when the state of the menu item changes.
 *
 * @slot - menu items or divider to be listed in the menu.
 *
 */
@customElement('ods-menu')
export class OdsMenu extends OdsBaseElement {
  static styles: CSSResultGroup = [baseStyles, styles]

  static override shadowRootOptions: ShadowRootInit = { mode: 'open', delegatesFocus: true }

  @property({ reflect: true }) orientation: ListOrientation = 'vertical'

  @property({ reflect: true }) appearance: OdsMenuAppearance = 'default'

  @property() label?: string

  @property() value = ''

  @property({ attribute: 'value-separator' }) valueSeparator = ','

  @property({ reflect: false, attribute: 'selection-type' }) selectionType: SelectionType = 'none'

  @property({ attribute: false }) selected: string[] = []

  @state() selectedItems = [] as SelectionElement[]

  @queryAssignedElements({ selector: 'ods-menu-item', flatten: true })
  menuItems!: Array<OdsMenuItem>

  controller?: ListController
  ownRole = 'menu'

  get itemRole(): string {
    switch (this.selectionType) {
      case 'single':
        return 'menuitemradio'
      case 'multiple':
        return 'menuitemcheckbox'
      default:
        return 'menuitem'
    }
  }

  firstUpdated(changes: PropertyValues) {
    super.firstUpdated(changes)
    this.controller = new ListController(this as unknown as ListHost, this.menuItems as ListItem[])
  }

  render() {
    return html`<slot></slot>`
  }
}

export default OdsMenu

declare global {
  interface HTMLElementTagNameMap {
    'ods-menu': OdsMenu
  }
}
