import { html } from 'lit'
import { property, state } from 'lit/decorators.js'
import { live } from 'lit/directives/live.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { styleMap } from 'lit/directives/style-map.js'
import { OdsTextareaFieldResize as Resize } from '../types'
import { OdsTextFieldCommonTemplate as CommonTemplate } from './common.template'

/**
 * @classdesc This class has properties, states and methods to textarea-field
 *
 * @extends {CommonTemplate<OdsField>}
 *
 * @csspart field - The textarea element.
 *
 */

export class OdsTextareaTemplate extends CommonTemplate {
  @property({ type: String }) resize: Resize = 'vertical'

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @state() private textareaAutosizeTime: any = null

  private textareaAutosize() {
    this.textareaAutosizeTime = setTimeout(() => {
      if (this.nativeElement) {
        this.nativeElement.style.cssText = `height: auto`
        this.nativeElement.style.cssText = `height: ${this.nativeElement?.scrollHeight}px`
      }
    }, 0)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.textareaAutosizeTime && clearTimeout(this.textareaAutosizeTime)
  }

  protected renderTextarea() {
    return html`<textarea
      part="field"
      class="text-field"
      id=${this.name ? this.name + 'Field' : 'textareaField'}
      style=${styleMap({ resize: this.resize })}
      aria-label=${ifDefined(this.label)}
      .aria-describedby=${ifDefined(this.helperText)}
      autocomplete=${ifDefined(this.autocomplete)}
      ?autofocus=${this.autofocus}
      ?disabled=${this.disabled}
      enterkeyhint=${ifDefined(this.enterkeyhint)}
      form=${ifDefined(this.form)}
      maxlength=${ifDefined(this.maxlength)}
      minlength=${ifDefined(this.minlength)}
      name=${ifDefined(this.name)}
      placeholder=${ifDefined(this.placeholder)}
      ?readonly=${this.readonly}
      ?required=${this.required}
      ?spellcheck=${this.spellcheck}
      .value=${live(this.value)}
      @focus=${this.onFieldFocus}
      @blur=${this.onFieldBlur}
      @input=${this.handleInputChange}
      @keydown=${this.textareaAutosize}
    >
      ${this.value}
    </textarea
    >`
  }
}
