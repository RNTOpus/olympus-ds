import { html } from 'lit'
import { property } from 'lit/decorators.js'
import { live } from 'lit/directives/live.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { OdsTextFieldCommonTemplate as CommonTemplate } from './common.template'
import type { OdsTextFieldInputmode as Inputmode } from '../types'

/**
 * @classdesc This class has properties, states and methods to text-field
 *
 * @extends {CommonTemplate<OdsField>}
 *
 * @csspart field - The input element.
 *
 */

export class OdsInputTemplate extends CommonTemplate {
  @property() autocorrect?: 'off' | 'on'
  @property() inputmode?: Inputmode
  @property() pattern?: string
  @property() max?: number | string
  @property() min?: number | string
  @property() step?: number | 'any'

  protected renderInput() {
    return html` <input
      part="field"
      class="text-field"
      id=${this.name ? this.name + 'Field' : 'inputField'}
      autocomplete=${ifDefined(this.type === 'password' ? 'off' : this.autocomplete)}
      autocorrect=${ifDefined(this.type === 'password' ? 'off' : this.autocorrect)}
      ?autofocus=${this.autofocus}
      ?disabled=${this.disabled}
      enterkeyhint=${ifDefined(this.enterkeyhint)}
      form=${ifDefined(this.form)}
      inputmode=${ifDefined(this.inputmode)}
      max=${ifDefined(this.max)}
      maxlength=${ifDefined(this.maxlength)}
      min=${ifDefined(this.min)}
      minlength=${ifDefined(this.minlength)}
      name=${ifDefined(this.name)}
      pattern=${ifDefined(this.pattern)}
      placeholder=${ifDefined(this.placeholder)}
      ?readonly=${this.readonly}
      ?required=${this.required}
      ?spellcheck=${this.spellcheck}
      step=${ifDefined(this.step as number)}
      type=${this.type}
      .value=${live(this.value)}
      @focus=${this.handleFocus}
      @blur=${this.handleBlur}
      @change=${this.handleChange}
      @input=${this.handleInput}
    />`
  }
}
