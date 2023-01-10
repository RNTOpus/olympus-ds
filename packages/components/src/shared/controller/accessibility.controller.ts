import { AccessibilityHost, List } from '../types'

export class AccessibilityController {
  private host: AccessibilityHost<List>

  constructor(host: AccessibilityHost<List>) {
    this.host = host
    host.addController(this as any)
  }

  hostConnected(): void {
    if (!this.host.hasAttribute('role')) {
      this.host.setAttribute('role', this.host.ownRole || '')
    }
    this.host.setAttribute('aria-orientation', `${this.host.horizontal ? 'horizontal' : 'vertical'}`)
    this.host.label && this.host.setAttribute('aria-label', this.host.label)
    this.host.setAttribute('dir', 'ltr')
  }

  setCheckedItem(item, value: string) {
    item.setAttribute('aria-checked', value)
  }

  setDisabledItem(item, value: string) {
    item.setAttribute('aria-disabled', value)
  }

  setAriaActivedescendant(focusedItemId: string) {
    this.host.setAttribute('aria-activedescendant', focusedItemId)
  }

}
