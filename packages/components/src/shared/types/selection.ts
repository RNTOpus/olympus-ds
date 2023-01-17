import { ReactiveControllerHost } from 'lit'

export type SelectionType = 'none' | 'multiple' | 'single'

export type SelectionElement = HTMLElement & { selected: boolean; value: string }
export type SelectionElementContainer<Item extends SelectionElement> = {
  selected: string[]
  selectedItems: Item[]
  valueSeparator: string
  value: string
  selectionType: SelectionType
  isMultipleSelection: boolean
  isSingleSelection: boolean
}

export type SelectionHost = ReactiveControllerHost & HTMLElement & SelectionElementContainer<SelectionElement>
