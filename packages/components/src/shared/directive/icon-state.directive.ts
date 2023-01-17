import { directive, Directive } from 'lit/directive.js'
import renderIcon from '../icon/render'

export class SelectableIconStateDirective extends Directive {
  renderCheckboxIcon(isSelected) {
    return renderIcon(isSelected ? 'checkBox' : 'checkBoxOutlineBlank')
  }

  renderRadioIcon(isSelected) {
    return renderIcon(isSelected ? 'radioButtonChecked' : 'radioButtonUnchecked')
  }

  render(isCheckbox = false, isSelected = false) {
    return isCheckbox ? this.renderCheckboxIcon(isSelected) : this.renderRadioIcon(isSelected)
  }
}

export const getSelectableIcon = directive(SelectableIconStateDirective)
