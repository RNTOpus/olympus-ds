import { ListHost, ListItem } from '../types'
import type { ListController } from './list.controller'

export class FocusController {
  private host: ListHost
  private mainController: ListController

  constructor(host: ListHost, mainController: ListController) {
    this.host = host
    host.addController(this as any)
    this.mainController = mainController
  }

  hostUpdate(): void {
    if (!this.host.hasAttribute('tabindex')) {
      const role = this.host.getAttribute('role')
      if (role === 'group') {
        this.host.tabIndex = -1
      } else if (role !== 'none') {
        this.host.tabIndex = 0
      }
    }
  }

  getFocusable() {
    return this.mainController.childItems?.find(childItem => childItem.getAttribute('tabindex') === '0')
  }

  makeFocusable(child: ListItem) {
    if (this.mainController.hasChildItems) {
      const currentChildItem = child.disabled ? this.mainController.childItems[0] : child
      this.mainController.childItems
        .filter(childItem => !childItem.disabled)
        .forEach(childItem => childItem.setAttribute('tabindex', childItem === currentChildItem ? '0' : '-1'))
    }
  }

  resetFocusable = () => {
    if (this.mainController.hasChildItems) {
      this.makeFocusable(this.mainController.childItems[0])
    }
  }

  handleKeyDown = (event: KeyboardEvent) => {
    event.preventDefault()

    const items = this.mainController.childItems.filter(item => !item.disabled)

    const { code } = event

    if (code === 'Space' || code === 'Enter') {
      const item = this.getFocusable()
      item?.click()
    }

    if (['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(code)) {
      const currentChildItem = this.getFocusable()
      let index = currentChildItem ? items.indexOf(currentChildItem) : 0

      if (this.mainController.hasChildItems) {
        switch (code) {
          case 'ArrowDown':
            this.host.orientation === 'vertical' && index++
            break
          case 'ArrowUp':
            this.host.orientation === 'vertical' && index--
            break
          case 'ArrowRight':
            this.host.orientation === 'horizontal' && index++
            break
          case 'ArrowLeft':
            this.host.orientation === 'horizontal' && index--
            break
          case 'Home':
            index = 0
            break
          case 'End':
            index = items.length - 1
            break
          default:
            break
        }

        if (index < 0) {
          index = items.length - 1
        }
        if (index > items.length - 1) {
          index = 0
        }

        const childItem = items[index]
        this.makeFocusable(childItem)
        childItem.focus()
        this.mainController.accessibilityController?.setAriaActivedescendant(childItem.id)

        return
      }
    }
  }
}
