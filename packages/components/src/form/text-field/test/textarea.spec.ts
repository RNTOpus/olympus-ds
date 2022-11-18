import '..'
import '../../field'
import type { OdsTextareaField } from '..'
import type { OdsField } from '../../field'
import { expect, fixture, fixtureCleanup, html, triggerBlurFor, triggerFocusFor, waitUntil } from '@open-wc/testing'
import { sendKeys, sendMouse } from '@web/test-runner-commands'
import sinon from 'sinon'

const withLabel = html` <ods-textarea label="a label" /> `
const withoutLabel = html` <ods-textarea /> `

function getMiddleOfElement(element) {
  const { x, y, width, height } = element.getBoundingClientRect();

  return {
    x: Math.floor(x + window.pageXOffset + width / 2),
    y: Math.floor(y + window.pageYOffset + height / 2),
  };
}

describe('<ods-textarea>', () => {
  afterEach(() => {
    fixtureCleanup()
  })
  describe('accessibility', () => {
    it('passes with label', async () => {
      const el = await fixture<OdsTextareaField>(withLabel)
      await expect(el).to.be.accessible()
    })

    it('fails without label', async () => {
      const el = await fixture<OdsTextareaField>(withoutLabel)
      await expect(el).not.to.be.accessible()
    })

    it('sets aria-describedby', async () => {
      const el = await fixture<OdsTextareaField>(withLabel)
      el.helperText = 'my helper text'
      await el.updateComplete

      const textareaElement = el.shadowRoot!.querySelector('[part="field"]') as HTMLTextAreaElement
      expect(textareaElement!['aria-describedby']).to.equal('my helper text')
    })
  })

  describe('rendering', () => {
    it('renders element correctly with default values', async () => {
      const el = await fixture<OdsTextareaField>(withLabel)
      expect(el.label).to.equal('a label')
    })

    it('renders dom correctly with default values', async () => {
      const el = await fixture<OdsTextareaField>(withLabel)
      expect(el).dom.to.equal('<ods-textarea label="a label"> </ods-textarea>')
    })

    it('renders shadow dom correctly with default values and native textarea', async () => {
      const el = await fixture<OdsTextareaField>(withLabel)
      expect(el).shadowDom.to.equal(
        `<ods-field appearance="outline" labelstate="grow" part="wrapper" as="textarea"></ods-field>`,
        {
          ignoreTags: ['slot', 'textarea']
        }
      )
    })

  })

  describe('on the label', () => {

    it('when field is required add "*"', async () => {
      const el = await fixture<OdsTextareaField>(withLabel)
      el.required = true
      await el.updateComplete

      const odsField = el.shadowRoot!.querySelector('[part="wrapper"]') as OdsField
      const labelElement = odsField.shadowRoot!.querySelector('[part="label"]') as HTMLElement

      expect(labelElement!.textContent).to.equal('a label *')
    })
    it('static state', async () => {
      const el = await fixture<OdsTextareaField>(withLabel)
      el.staticLabel = true
      await el.updateComplete

      expect(el).shadowDom.to.equal(`<ods-field labelstate="static"></ods-field>`, {
        ignoreAttributes: ['appearance', 'part', 'as'],
        ignoreChildren: ['ods-field']
      })
    })

    describe('grow state', () => {
      it('when it has no value and it has no placeholder', async () => {
        const el = await fixture<OdsTextareaField>(withLabel)

        expect(el.getAttribute('value')).to.be.null
        expect(el.getAttribute('placeholder')).to.be.null

        await triggerBlurFor(el)
        expect(document.activeElement === el).to.be.false

        expect(el).shadowDom.to.equal(`<ods-field labelstate="grow"></ods-field>`, {
          ignoreAttributes: ['appearance', 'part', 'as'],
          ignoreChildren: ['ods-field']
        })
      })
    })

    describe('shrink state', () => {
      it('when has value', async () => {
        const el = await fixture<OdsTextareaField>(withLabel)
        el.value = 'is Shrink'
        await el.updateComplete

        expect(el).shadowDom.to.equal(`<ods-field labelstate="shrink"></ods-field>`, {
          ignoreAttributes: ['appearance', 'part', 'as'],
          ignoreChildren: ['ods-field']
        })
      })

      it('when has placeholder', async () => {
        const el = await fixture<OdsTextareaField>(withLabel)
        el.placeholder = 'is Shrink'
        await el.updateComplete

        expect(el).shadowDom.to.equal(`<ods-field labelstate="shrink"></ods-field>`, {
          ignoreAttributes: ['appearance', 'part', 'as'],
          ignoreChildren: ['ods-field']
        })
      })

      it('when field is focused', async () => {
        const el = await fixture<OdsTextareaField>(withLabel)
        el.focus();
        await el.updateComplete

        expect(el).shadowDom.to.equal(`<ods-field labelstate="shrink"></ods-field>`, {
          ignoreAttributes: ['appearance', 'part', 'focused', 'as'],
          ignoreChildren: ['ods-field']
        })
      })
    })
  })

  describe('in native textarea', () => {
    it('sets value', async () => {
      const el = await fixture<OdsTextareaField>(withLabel)
      el.value = 'my value'
      await el.updateComplete

      const textareaElement = el.shadowRoot!.querySelector('[part="field"]') as HTMLTextAreaElement
      expect(textareaElement!.value).to.equal('my value')
    })

    it('disables', async () => {
      const el = await fixture<OdsTextareaField>(withLabel)
      el.disabled = true
      await el.updateComplete

      const textareaElement = el.shadowRoot!.querySelector('[part="field"]') as HTMLTextAreaElement
      expect(textareaElement!.disabled).to.be.true
    })

  })

  describe('using methods', () => {
    it('should emit ods-focus and ods-blur when the field is focused and blurred', async () => {
      const el = await fixture<OdsTextareaField>(withLabel)
      const focusHandler = sinon.spy()
      const blurHandler = sinon.spy()

      el.addEventListener('ods-focus', focusHandler)
      el.addEventListener('ods-blur', blurHandler)

      el.focus()
      await waitUntil(() => focusHandler.calledOnce)

      el.blur()
      await waitUntil(() => blurHandler.calledOnce)

      expect(focusHandler).to.have.been.calledOnce
      expect(blurHandler).to.have.been.calledOnce
    })

    it('can be focused and blured on IE11', async () => {
      const el = await fixture<OdsTextareaField>(withLabel)

      await triggerFocusFor(el)
      expect(document.activeElement === el).to.be.true

      await triggerBlurFor(el)
      expect(document.activeElement === el).to.be.false
    })

    it('should focus the textarea when clicked', async () => {
      const el = await fixture<OdsTextareaField>(withLabel)
      el.click()
      await el.updateComplete

      const odsField = el.shadowRoot!.querySelector('[part="wrapper"]') as OdsField

      expect(odsField!.focused).to.be.true
    })

    it('should emit "ods-clear" when the clear method is called', async () => {
      const el = await fixture<OdsTextareaField>(withLabel)
      el.value = 'my value'
      await el.updateComplete

      const clearHandler = sinon.spy()

      el.addEventListener('ods-clear', clearHandler)

      el.clear()
      await waitUntil(() => clearHandler.calledOnce)

      expect(clearHandler).to.have.been.calledOnce

      const textareaElement = el.shadowRoot!.querySelector('[part="field"]') as HTMLTextAreaElement
      expect(textareaElement!.value).to.equal('')
    })

  })

  describe('when it has clearable attribute', () => {
    it('displays the clear icon button when it has a value', async () => {
      const el = await fixture<OdsTextareaField>(withLabel)
      el.clearable = true
      el.value = 'my value'
      await el.updateComplete

      const odsField = el.shadowRoot!.querySelector('[part="wrapper"]') as OdsField
      const clearButtonElement = odsField.shadowRoot!.querySelector('[part="clear-icon-button"]') as HTMLTextAreaElement

      expect(clearButtonElement).to.be.exist
    })

    it('not displays the clear icon button when it hasn´t a value', async () => {
      const el = await fixture<OdsTextareaField>(withLabel)
      el.clearable = true
      await el.updateComplete

      const odsField = el.shadowRoot!.querySelector('[part="wrapper"]') as OdsField
      const clearButtonElement = odsField.shadowRoot!.querySelector('[part="clear-icon-button"]') as HTMLTextAreaElement

      expect(clearButtonElement).to.be.null
    })

    it('clears the field value when clear icon button is clicked', async () => {
      const el = await fixture<OdsTextareaField>(withLabel)
      el.clearable = true
      el.value = 'my value'
      await el.updateComplete

      const odsField = el.shadowRoot!.querySelector('[part="wrapper"]') as OdsField
      const clearButtonElement = odsField.shadowRoot!.querySelector('[part="clear-icon-button"]') as HTMLTextAreaElement
      const textareaElement = el.shadowRoot!.querySelector('[part="field"]') as HTMLTextAreaElement

      const { x, y } = getMiddleOfElement(clearButtonElement);

      await sendMouse({ type: 'click', position: [x, y] });

      expect(el.value).to.equal('')
      expect(textareaElement!.value).to.equal('')
    })

    it('emits "ods-clear" event when clear icon button is clicked', async () => {
      const el = await fixture<OdsTextareaField>(withLabel)
      el.clearable = true
      el.value = 'my value'
      await el.updateComplete

      const clearHandler = sinon.spy()

      el.addEventListener('ods-clear', clearHandler)

      const odsField = el.shadowRoot!.querySelector('[part="wrapper"]') as OdsField
      const clearButtonElement = odsField.shadowRoot!.querySelector('[part="clear-icon-button"]') as HTMLTextAreaElement

      const { x, y } = getMiddleOfElement(clearButtonElement);

      await sendMouse({ type: 'click', position: [x, y] });
      await waitUntil(() => clearHandler.calledOnce)

      expect(clearHandler).to.have.been.calledOnce
    })

  })

  describe('native events', () => {
    it('should keep emiting "input" event when the field value change', async () => {
      const el = await fixture<OdsTextareaField>(withLabel)
      const keys = 'abc123'

      const inputHandler = sinon.spy()

      el.addEventListener('input', inputHandler)
      el.focus()

      await sendKeys({ type: keys })
      await waitUntil(() => inputHandler.called)

      expect(inputHandler).to.have.been.called

      const textareaElement = el.shadowRoot!.querySelector('[part="field"]') as HTMLTextAreaElement
      expect(textareaElement!.value).to.equal(keys)
    })
  })
})
