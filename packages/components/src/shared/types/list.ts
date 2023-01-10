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
    horizontal: boolean
    selectable: boolean
    controller: ListController
  }

export type ListItem = HTMLElement &
  SelectionElement & {
    label?: string
    disabled: boolean
    active: boolean
  }

export type ListHost = ReactiveControllerHost & HTMLElement & List

