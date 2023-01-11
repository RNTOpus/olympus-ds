import { ReactiveControllerHost } from 'lit'
import type { OdsBaseElement } from '../base-element'
import { ListController } from '../controller'
import type { SelectionElement, SelectionElementContainer } from './selection'

export type List = HTMLElement &
  OdsBaseElement &
  SelectionElementContainer<ListItem> & {
    label?: string
    childItems: ListItem[]
    ownRole?: string
    orientation: ListOrientation
    selectable: boolean
    controller: ListController
  }

export type ListItem = HTMLElement &
  SelectionElement & {
    label?: string
    disabled: boolean
    active: boolean
  }

export type ListEventDetails = {
  targetItem: ListItem
  selectedItems?: ListItem[]
  selected?: string[]
  value?: string
  label?: string
}


export type ListOrientation = 'vertical' | 'horizontal'

export type ListHost = ReactiveControllerHost & HTMLElement & List
