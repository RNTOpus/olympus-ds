import type { AccessibilityHost, List, ListEventDetails, ListHost, ListItem, SelectionElement, SelectionHost } from '../types'
import { AccessibilityController } from './accessibility.controller'
import { FocusController } from './focus.controller'
import { SelectionController } from './selection.controller'

export class ListController {
  host: ListHost
  accessibilityController?: AccessibilityController
  focusController?: FocusController
  selectionControler?: SelectionController

  hasInitialValue = false
  hasInitialSelected = false

  protected cachedValue?: string

  constructor(host: ListHost, items: ListItem[]) {
    this.host = host
    host.addController(this as any)
    this.childItems = items
  }

  hostConnected() {
    this.accessibilityController = new AccessibilityController(this.host as AccessibilityHost<List>)
    this.focusController = new FocusController(this.host as ListHost, this)
    this.selectionControler = new SelectionController(this.host as SelectionHost, this)

    this.hasInitialValue = !!this.host.value
    this.hasInitialSelected = !!this.host.selected.length

    this.selectable && this.selectionControler?.normalizeChildState()

    this.host.addEventListener('click', this.handleClick)
    this.host.addEventListener('focus', this.handleFocus)
    this.host.addEventListener('slotchange', this.focusController.resetFocusable)
    this.host.addEventListener('keydown', this.focusController.handleKeyDown)
  }

  hostUpdated() {
    for (const child of this.host.children) {
      this.selectionControler?.normalizeSelectedElementInSingleSelection(child as ListItem)
    }
  }

  hostDisconnected() {
    this.host.removeEventListener('click', this.handleClick)
    this.host.removeEventListener('focus', this.handleFocus)
    if (this.focusController) {
      this.host.removeEventListener('keydown', this.focusController.handleKeyDown)
      this.host.removeEventListener('slotchange', this.focusController.resetFocusable)
    }
  }

  protected _childItems = [] as ListItem[]

  get childItems(): ListItem[] {
    return this._childItems
  }

  set childItems(childItems: ListItem[]) {
    this._childItems = childItems
  }

  get hasChildItems() {
    return this.childItems && this.childItems.length > 0
  }

  get selectable(): boolean {
    return this.host.selectionType !== 'none'
  }

  private toggleChildActiveState(targetItem: ListItem) {
    const attributeName = 'active'
    if (this.hasChildItems) {
      this.childItems.forEach(item => {
        if (item === targetItem) {
          item.hasAttribute(attributeName) ? item.removeAttribute(attributeName) : item.setAttribute(attributeName, '')
        } else {
          item.removeAttribute(attributeName)
        }
      })
    }
  }

  private getEventDetails(targetItem: ListItem): ListEventDetails {
    return {
      targetItem,
      ...(this.selectable
        ? {
            selectedItems: this.host.selectedItems,
            selected: this.host.selected,
            value: this.host.value,
            ...(this.host.label
              ? {
                  label: this.host.label
                }
              : {})
          }
        : {})
    }
  }

  private changeEventDispatch(child: ListItem): void {
    this.host.emit('ods-change', {
      detail: this.getEventDetails(child)
    })
  }

  handleFocus = () => {
    if (this.hasChildItems) {
      const firstChild = this.childItems[0]
      this.focusController?.makeFocusable(firstChild)
      firstChild.focus()
    }
  }

  handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    const item = target.closest('ods-menu-item') as unknown as ListItem

    if (item && !item?.disabled) {
      if (this.selectable) {
        this.selectionControler?.normalizeChildState(item as unknown as SelectionElement)
      } else {
        this.toggleChildActiveState(item)
      }
      this.changeEventDispatch(item)
    }
  }
}
