import '..'
import '../../field'
import type { OdsInputField } from '..'
import type { OdsField } from '../../field'
import { expect, fixture, fixtureCleanup, html, triggerBlurFor, triggerFocusFor, waitUntil } from '@open-wc/testing'
import { sendKeys, sendMouse } from '@web/test-runner-commands'
import sinon from 'sinon'

const withLabel = html` <ods-input label="a label" /> `
const withoutLabel = html` <ods-input /> `
const withPasswordType = html` <ods-input label="a label" type="password" /> `

function getMiddleOfElement(element) {
  const { x, y, width, height } = element.getBoundingClientRect();

  return {
    x: Math.floor(x + window.pageXOffset + width / 2),
    y: Math.floor(y + window.pageYOffset + height / 2),
  };
}

describe('<ods-input>', () => {
  afterEach(() => {
    fixtureCleanup()
  })
  describe('accessibility', () => {
    it('passes with label', async () => {
      const el = await fixture<OdsInputField>(withLabel)
      await expect(el).to.be.accessible()
    })

    it('fails without label', async () => {
      const el = await fixture<OdsInputField>(withoutLabel)
      await expect(el).not.to.be.accessible()
    })

    it('sets aria-describedby', async () => {
      const el = await fixture<OdsInputField>(withLabel)
      el.helperText = 'my helper text'
      await el.updateComplete

      const inputElement = el.shadowRoot!.querySelector('[part="field"]') as HTMLInputElement
      expect(inputElement!['aria-describedby']).to.equal('my helper text')
    })
  })

  describe('rendering', () => {
    it('renders element correctly with default values', async () => {
      const el = await fixture<OdsInputField>(withLabel)
      expect(el.label).to.equal('a label')
    })

    it('renders dom correctly with default values', async () => {
      const el = await fixture<OdsInputField>(withLabel)
      expect(el).dom.to.equal('<ods-input label="a label"> </ods-input>')
    })

    it('renders shadow dom correctly with default values and native input', async () => {
      const el = await fixture<OdsInputField>(withLabel)
      expect(el).shadowDom.to.equal(
        `<ods-field appearance="outline" labelstate="grow" part="wrapper">
          <input aria-label="a label" class="text-field" id="inputField" part="field" type="text" />
        </ods-field>`,
        {
          ignoreTags: ['slot']
        }
      )
    })

  })

  describe('on the label', () => {

    it('when field is required add "*"', async () => {
      const el = await fixture<OdsInputField>(withLabel)
      el.required = true
      await el.updateComplete

      const odsField = el.shadowRoot!.querySelector('[part="wrapper"]') as OdsField
      const labelElement = odsField.shadowRoot!.querySelector('[part="label"]') as HTMLInputElement

      expect(labelElement!.textContent).to.equal('a label *')
    })
    it('static state', async () => {
      const el = await fixture<OdsInputField>(withLabel)
      el.staticLabel = true
      await el.updateComplete

      expect(el).shadowDom.to.equal(`<ods-field labelstate="static"></ods-field>`, {
        ignoreAttributes: ['appearance', 'part'],
        ignoreChildren: ['ods-field']
      })
    })

    describe('grow state', () => {
      it('when it has no value, it has no placeholder, it`s not focused and the type is different from date, time or datetime-local', async () => {
        const el = await fixture<OdsInputField>(withLabel)

        expect(el.getAttribute('value')).to.be.null
        expect(el.getAttribute('placeholder')).to.be.null
        expect(el.getAttribute('type')).not.to.eq('date')
        expect(el.getAttribute('type')).not.to.eq('time')
        expect(el.getAttribute('type')).not.to.eq('datetime-local')

        await triggerBlurFor(el)
        expect(document.activeElement === el).to.be.false

        expect(el).shadowDom.to.equal(`<ods-field labelstate="grow"></ods-field>`, {
          ignoreAttributes: ['appearance', 'part'],
          ignoreChildren: ['ods-field']
        })
      })
    })

    describe('shrink state', () => {
      it('when has value', async () => {
        const el = await fixture<OdsInputField>(withLabel)
        el.value = 'is Shrink'
        await el.updateComplete

        expect(el).shadowDom.to.equal(`<ods-field labelstate="shrink"></ods-field>`, {
          ignoreAttributes: ['appearance', 'part'],
          ignoreChildren: ['ods-field']
        })
      })

      it('when has placeholder', async () => {
        const el = await fixture<OdsInputField>(withLabel)
        el.placeholder = 'is Shrink'
        await el.updateComplete

        expect(el).shadowDom.to.equal(`<ods-field labelstate="shrink"></ods-field>`, {
          ignoreAttributes: ['appearance', 'part'],
          ignoreChildren: ['ods-field']
        })
      })

      it('when field is focused', async () => {
        const el = await fixture<OdsInputField>(withLabel)
        el.focus();
        await el.updateComplete

        expect(el).shadowDom.to.equal(`<ods-field labelstate="shrink"></ods-field>`, {
          ignoreAttributes: ['appearance', 'part', 'focused'],
          ignoreChildren: ['ods-field']
        })
      })
      it('when type is date', async () => {
        const el = await fixture<OdsInputField>(withLabel)
        el.type = 'date'
        await el.updateComplete

        expect(el).shadowDom.to.equal(`<ods-field labelstate="shrink"></ods-field>`, {
          ignoreAttributes: ['appearance', 'part'],
          ignoreChildren: ['ods-field']
        })
      })

      it('when type is time', async () => {
        const el = await fixture<OdsInputField>(withLabel)
        el.type = 'time'
        await el.updateComplete

        expect(el).shadowDom.to.equal(`<ods-field labelstate="shrink"></ods-field>`, {
          ignoreAttributes: ['appearance', 'part'],
          ignoreChildren: ['ods-field']
        })
      })

      it('when type is datetime-local', async () => {
        const el = await fixture<OdsInputField>(withLabel)
        el.type = 'datetime-local'
        await el.updateComplete

        expect(el).shadowDom.to.equal(`<ods-field labelstate="shrink"></ods-field>`, {
          ignoreAttributes: ['appearance', 'part'],
          ignoreChildren: ['ods-field']
        })
      })
    })
  })

  describe('in native input', () => {
    it('sets value', async () => {
      const el = await fixture<OdsInputField>(withLabel)
      el.value = 'my value'
      await el.updateComplete

      const inputElement = el.shadowRoot!.querySelector('[part="field"]') as HTMLInputElement
      expect(inputElement!.value).to.equal('my value')
    })

    it('disables', async () => {
      const el = await fixture<OdsInputField>(withLabel)
      el.disabled = true
      await el.updateComplete

      const inputElement = el.shadowRoot!.querySelector('[part="field"]') as HTMLInputElement
      expect(inputElement!.disabled).to.be.true
    })

    it('changes type', async () => {
      const el = await fixture<OdsInputField>(withLabel)
      el.type = 'email'
      await el.updateComplete

      const inputElement = el.shadowRoot!.querySelector('[part="field"]') as HTMLInputElement
      expect(inputElement!.type).to.equal('email')
    })

  })

  describe('using methods', () => {
    it('should emit ods-focus and ods-blur when the field is focused and blurred', async () => {
      const el = await fixture<OdsInputField>(withLabel)
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
      const el = await fixture<OdsInputField>(withLabel)

      await triggerFocusFor(el)
      expect(document.activeElement === el).to.be.true

      await triggerBlurFor(el)
      expect(document.activeElement === el).to.be.false
    })

    it('should focus the input when clicked', async () => {
      const el = await fixture<OdsInputField>(withLabel)
      el.click()
      await el.updateComplete

      const odsField = el.shadowRoot!.querySelector('[part="wrapper"]') as OdsField

      expect(odsField!.focused).to.be.true
    })

    it('should emit "ods-clear" when the clear method is called', async () => {
      const el = await fixture<OdsInputField>(withLabel)
      el.value = 'my value'
      await el.updateComplete

      const clearHandler = sinon.spy()

      el.addEventListener('ods-clear', clearHandler)

      el.clear()
      await waitUntil(() => clearHandler.calledOnce)

      expect(clearHandler).to.have.been.calledOnce

      const inputElement = el.shadowRoot!.querySelector('[part="field"]') as HTMLInputElement
      expect(inputElement!.value).to.equal('')
    })

  })

  describe('when it has clearable attribute', () => {
    it('displays the clear icon button when it has a value', async () => {
      const el = await fixture<OdsInputField>(withLabel)
      el.clearable = true
      el.value = 'my value'
      await el.updateComplete

      const odsField = el.shadowRoot!.querySelector('[part="wrapper"]') as OdsField
      const clearButtonElement = odsField.shadowRoot!.querySelector('[part="clear-icon-button"]') as HTMLInputElement

      expect(clearButtonElement).to.be.exist
    })

    it('not displays the clear icon button when it hasn´t a value', async () => {
      const el = await fixture<OdsInputField>(withLabel)
      el.clearable = true
      await el.updateComplete

      const odsField = el.shadowRoot!.querySelector('[part="wrapper"]') as OdsField
      const clearButtonElement = odsField.shadowRoot!.querySelector('[part="clear-icon-button"]') as HTMLInputElement

      expect(clearButtonElement).to.be.null
    })

    it('not displays the clear icon button when field type is password', async () => {
      const el = await fixture<OdsInputField>(withPasswordType)
      el.clearable = true
      el.value = 'my value'
      await el.updateComplete

      const odsField = el.shadowRoot!.querySelector('[part="wrapper"]') as OdsField
      const clearButtonElement = odsField.shadowRoot!.querySelector('[part="clear-icon-button"]') as HTMLInputElement

      expect(clearButtonElement).to.be.null
    })

    it('clears the field value when clear icon button is clicked', async () => {
      const el = await fixture<OdsInputField>(withLabel)
      el.clearable = true
      el.value = 'my value'
      await el.updateComplete

      const odsField = el.shadowRoot!.querySelector('[part="wrapper"]') as OdsField
      const clearButtonElement = odsField.shadowRoot!.querySelector('[part="clear-icon-button"]') as HTMLInputElement
      const inputElement = el.shadowRoot!.querySelector('[part="field"]') as HTMLInputElement

      const { x, y } = getMiddleOfElement(clearButtonElement);

      await sendMouse({ type: 'click', position: [x, y] });

      expect(el.value).to.equal('')
      expect(inputElement!.value).to.equal('')
    })

    it('emits "ods-clear" event when clear icon button is clicked', async () => {
      const el = await fixture<OdsInputField>(withLabel)
      el.clearable = true
      el.value = 'my value'
      await el.updateComplete

      const clearHandler = sinon.spy()

      el.addEventListener('ods-clear', clearHandler)

      const odsField = el.shadowRoot!.querySelector('[part="wrapper"]') as OdsField
      const clearButtonElement = odsField.shadowRoot!.querySelector('[part="clear-icon-button"]') as HTMLInputElement

      const { x, y } = getMiddleOfElement(clearButtonElement);

      await sendMouse({ type: 'click', position: [x, y] });
      await waitUntil(() => clearHandler.calledOnce)

      expect(clearHandler).to.have.been.calledOnce
    })

  })

  describe('when is a password field', () => {
    it('displays the eye icon button', async () => {
      const el = await fixture<OdsInputField>(withPasswordType)

      const odsField = el.shadowRoot!.querySelector('[part="wrapper"]') as OdsField
      const eyeButtonElement = odsField.shadowRoot!.querySelector('[part="eye-icon-button"]') as HTMLInputElement

      expect(eyeButtonElement).to.be.exist
    })

    it('not display eye icon button when type is changed after element construction', async () => {
      const el = await fixture<OdsInputField>(withLabel)
      el.type = 'password'
      await el.updateComplete

      const odsField = el.shadowRoot!.querySelector('[part="wrapper"]') as OdsField
      const eyeButtonElement = odsField.shadowRoot!.querySelector('[part="eye-icon-button"]') as HTMLInputElement

      expect(eyeButtonElement).to.be.null
    })

    it('changes field type to "text" when eye icon button is clicked', async () => {
      const el = await fixture<OdsInputField>(withPasswordType)

      const odsField = el.shadowRoot!.querySelector('[part="wrapper"]') as OdsField
      const eyeButtonElement = odsField.shadowRoot!.querySelector('[part="eye-icon-button"]') as HTMLInputElement
      const inputElement = el.shadowRoot!.querySelector('[part="field"]') as HTMLInputElement

      const { x, y } = getMiddleOfElement(eyeButtonElement);

      await sendMouse({ type: 'click', position: [x, y] });

      expect(el.type).to.equal('text')
      expect(inputElement!.type).to.equal('text')
    })

    it('returns the field type to "password" when the eye icon button is clicked again', async () => {
      const el = await fixture<OdsInputField>(withPasswordType)

      const odsField = el.shadowRoot!.querySelector('[part="wrapper"]') as OdsField
      const eyeButtonElement = odsField.shadowRoot!.querySelector('[part="eye-icon-button"]') as HTMLInputElement
      const inputElement = el.shadowRoot!.querySelector('[part="field"]') as HTMLInputElement

      const { x, y } = getMiddleOfElement(eyeButtonElement);

      await sendMouse({ type: 'click', position: [x, y] });

      expect(el.type).to.equal('text')
      expect(inputElement!.type).to.equal('text')

      await sendMouse({ type: 'click', position: [x, y] });

      expect(el.type).to.equal('password')
      expect(inputElement!.type).to.equal('password')
    })

    it('changes icon to "visibilityOff" when eye icon button is clicked', async () => {
      const el = await fixture<OdsInputField>(withPasswordType)

      const odsField = el.shadowRoot!.querySelector('[part="wrapper"]') as OdsField
      const eyeButtonElement = odsField.shadowRoot!.querySelector('[part="eye-icon-button"]') as HTMLInputElement
      const eyeIconElement = eyeButtonElement.querySelector('.icon') as HTMLElement

      expect(eyeIconElement).to.have.class('-visibility')

      const { x, y } = getMiddleOfElement(eyeButtonElement);

      await sendMouse({ type: 'click', position: [x, y] });

      expect(eyeIconElement).to.have.class('-visibilityOff')
    })

    it('returns icon to "visibility" when the eye icon button is clicked again', async () => {
      const el = await fixture<OdsInputField>(withPasswordType)

      const odsField = el.shadowRoot!.querySelector('[part="wrapper"]') as OdsField
      const eyeButtonElement = odsField.shadowRoot!.querySelector('[part="eye-icon-button"]') as HTMLInputElement
      const eyeIconElement = eyeButtonElement.querySelector('.icon') as HTMLElement

      expect(eyeIconElement).to.have.class('-visibility')

      const { x, y } = getMiddleOfElement(eyeButtonElement);

      await sendMouse({ type: 'click', position: [x, y] });

      expect(eyeIconElement).to.have.class('-visibilityOff')

      await sendMouse({ type: 'click', position: [x, y] });

      expect(eyeIconElement).to.have.class('-visibility')
    })

  })

  describe('native events', () => {
    it('should keep emiting "input" event when the field value change', async () => {
      const el = await fixture<OdsInputField>(withLabel)
      const keys = 'abc123'

      const inputHandler = sinon.spy()

      el.addEventListener('input', inputHandler)
      el.focus()

      await sendKeys({ type: keys })
      await waitUntil(() => inputHandler.called)

      expect(inputHandler).to.have.been.called

      const inputElement = el.shadowRoot!.querySelector('[part="field"]') as HTMLInputElement
      expect(inputElement!.value).to.equal(keys)
    })
  })
})
