import { SelectionHost, SelectionElement, ListItem } from '../types'
import type { ListController } from './list.controller'

export class SelectionController {
  private host: SelectionHost
  private mainController: ListController

  private readonly selectedState = 'selected'

  constructor(host: SelectionHost, mainController: ListController) {
    this.host = host
    host.addController(this as any)
    this.mainController = mainController
  }

  get isMultipleSelection(): boolean {
    return this.host.selectionType === 'multiple'
  }

  get isSingleSelection(): boolean {
    return this.host.selectionType === 'single'
  }

  get hasInitialHostData(): boolean {
    return this.mainController.hasInitialValue || this.mainController.hasInitialSelected
  }

  normalizeChildState(target?: SelectionElement) {
    const isFirstLoad = !target

    if (isFirstLoad) {
      this.mainController.hasInitialValue &&
        this.mainController.hasInitialSelected &&
        console.warn(
          '[ODS warn]: Value and selected were informed, but only value will be considered in the first load'
        )
    } else {
      this.handleItemClick(target)
    }

    const values = this.normalizeValues()

    for (const child of this.host.children) {
      const element = child as ListItem

      if (element.disabled) {
        this.handleDisabledElement(element)
      } else {
        if (isFirstLoad) {
          this.hasInitialHostData
            ? this.handleInitialHostData(element, values)
            : element.selected && this.handleElementWithSelectedAttribute(element)
        } else {
          element === target
            ? this.toggleElementState(element)
            : this.isSingleSelection && element.removeAttribute(this.selectedState)
        }
      }
    }
  }

  normalizeSelectedElementInSingleSelection(element: ListItem): void {
    if(this.isSingleSelection && element.value !== this.host.value && element.hasAttribute('selected')) {
      element.removeAttribute(this.selectedState);
      console.warn('[ODS warn]: Only one item can be selected, so this item has been unchecked', element)
    }
  }

  private setSelectedElement(element: SelectionElement) {
    this.isMultipleSelection ? this.host.selectedItems.push(element) : (this.host.selectedItems = [element])
  }

  private setSelected(value: string) {
    this.isMultipleSelection ? this.host.selected.push(value) : (this.host.selected = [value])
  }

  private removeSelectedElement(element: SelectionElement) {
    this.host.selectedItems = this.isMultipleSelection ? this.host.selectedItems.filter(item => item !== element) : []
  }

  private removeSelected(value: string) {
    this.host.selected = this.isMultipleSelection ? this.host.selected.filter(selected => selected !== value) : []
  }

  private handleValue() {
    this.host.value = this.isMultipleSelection
      ? this.host.selected.join(this.host.valueSeparator)
      : this.host.selected[0]
  }

  private addItem(element: SelectionElement): void {
    this.setSelectedElement(element)
    this.setSelected(element.value)
    this.handleValue()
  }

  private removeItem(element: SelectionElement): void {
    this.removeSelectedElement(element)
    this.removeSelected(element.value)
    this.handleValue()
  }

  private handleItemClick(element: SelectionElement): void {
    const itemAlreadySelected = this.host.selectedItems.includes(element)
    itemAlreadySelected ? this.removeItem(element) : this.addItem(element)
  }

  private handleDisabledElement(element: SelectionElement): void {
    this.removeItem(element)
    element.removeAttribute(this.selectedState)
    element.selected && console.warn('[ODS warn]: A disabled item cannot be selected', element)
  }

  private toggleElementState(element: SelectionElement) {
    const isDisabled = element.hasAttribute('disabled')
    const isSelected = element.hasAttribute(this.selectedState)
    isDisabled || isSelected
      ? element.removeAttribute(this.selectedState)
      : element.setAttribute(this.selectedState, '')
    this.mainController.accessibilityController?.setCheckedItem(
      element,
      element.hasAttribute(this.selectedState) && !isDisabled ? 'true' : 'false'
    )
  }

  private normalizeValues(): string[] {
    let values: string[] = []

    if (this.mainController.hasInitialValue) {
      values = this.host.value.split(this.host.valueSeparator)
      this.host.selected = values
    } else if (this.mainController.hasInitialSelected) {
      values = this.host.selected
      this.handleValue()
    }

    return values
  }

  private handleInitialHostData(element: ListItem, values: string[]) {
    if (values.some(value => value?.trim() === element.value?.trim())) {
      this.toggleElementState(element)
      this.setSelectedElement(element)
    }
  }

  private handleElementWithSelectedAttribute(element: ListItem): void {
    if (!this.host.selectedItems.includes(element)) {
      this.addItem(element)
      this.toggleElementState(element)
    }
  }
}
