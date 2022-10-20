import '..'
import type { OdsButton, OdsButtonType } from '..'
import { expect, fixture, html, waitUntil } from '@open-wc/testing'
import sinon from 'sinon'

describe('<ods-button>', () => {
  const render = async ({ variant, size, type, disabled, outlined, fully }: any) => {
    return await fixture<OdsButton>(html`<ods-button
      .variant=${variant}
      .size=${size}
      .type=${type}
      ?disabled=${disabled}
      ?outlined=${outlined}
      ?fully=${fully}
    >
      Label
    </ods-button>`)
  }

  it('should render successfully', async () => {
    const el = await fixture<OdsButton>(html`<ods-button> Label </ods-button>`)
    await expect(el).to.be.accessible()

    expect(el.variant).to.equal('primary')
    expect(el.size).to.equal('normal')
    expect(el.rounded).to.equal('standard')

    const nativeButton = el.shadowRoot!.querySelector('button')
    if (nativeButton) {
      expect(nativeButton.type).to.equal('button')
    }
  })

  describe('when passing type attribute', () => {
    const types: OdsButtonType[] = ['button', 'submit', 'reset']
    types.forEach(type => {
      it(`should change type in the native <button> to "${type}"`, async () => {
        const el = await render({ type })
        expect(el).to.be.accessible()
        expect(el.shadowRoot!.querySelector(`button[type='${type}']`)).to.exist
      })
    })
  })

  describe('when disabled', () => {
    it('should disable the native <button>', async () => {
      const el = await render({ disabled: true })
      expect(el).to.be.accessible()
      expect(el.shadowRoot!.querySelector('button[disabled]')).to.exist
    })

    it('should not dispatch event clicks', async () => {
      const button = await render({ disabled: true })
      const handleClick = sinon.spy()
      button.addEventListener('click', handleClick)
      button.click()

      expect(handleClick).not.to.have.been.called

      button.shadowRoot!.querySelector('button')!.click()
      expect(handleClick).not.to.have.been.called
    })
  })

  describe('when using methods', () => {
    it('should emit ods-focus and ods-blur when the button is focused and blurred', async () => {
      const el = await render({})
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
    it('should emit a click event when calling click()', async () => {
      const el = await render({})
      const clickHandler = sinon.spy()

      el.addEventListener('click', clickHandler)
      el.click()
      await waitUntil(() => clickHandler.calledOnce)

      expect(clickHandler).to.have.been.calledOnce
    })
  })
})

describe('<ods-filled-button>', () => {
  it('should render successfully', async () => {
    const el = await fixture<OdsButton>(html`<ods-filled-button> Label </ods-filled-button>`)
    await expect(el).to.be.accessible()

    expect(el.variant).to.equal('primary')
    expect(el.size).to.equal('normal')
    expect(el.rounded).to.equal('standard')

    const nativeButton = el.shadowRoot!.querySelector('button')
    if (nativeButton) {
      expect(nativeButton.type).to.equal('button')
    }
  })
})

describe('<ods-outlined-button>', () => {
  it('should render successfully', async () => {
    const el = await fixture<OdsButton>(html`<ods-outlined-button> Label </ods-outlined-button>`)
    await expect(el).to.be.accessible()

    expect(el.variant).to.equal('primary')
    expect(el.size).to.equal('normal')
    expect(el.rounded).to.equal('standard')

    const nativeButton = el.shadowRoot!.querySelector('button')
    if (nativeButton) {
      expect(nativeButton.type).to.equal('button')
    }
  })
})

describe('<ods-text-button>', () => {
  it('should render successfully', async () => {
    const el = await fixture<OdsButton>(html`<ods-text-button> Label </ods-text-button>`)
    await expect(el).to.be.accessible()

    expect(el.variant).to.equal('primary')
    expect(el.size).to.equal('normal')
    expect(el.rounded).to.equal('standard')

    const nativeButton = el.shadowRoot!.querySelector('button')
    if (nativeButton) {
      expect(nativeButton.type).to.equal('button')
    }
  })
})
