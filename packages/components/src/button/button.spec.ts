import './.'
import type { OdsButton, OdsButtonSize, OdsButtonType, OdsButtonVariant } from './.'
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

  describe('when not passing attributes', () => {
    it('should be accessible', async () => {
      const el = await render({})
      await expect(el).to.be.accessible()
      expect(el.shadowRoot!.querySelector('button')).to.exist
    })

    it('default values are set correctly', async () => {
      const el = await fixture<OdsButton>(html`<ods-button> Label </ods-button>`)

      expect(el.variant).to.equal('primary');
      expect(el.size).to.equal('normal');

      const nativeButton = el.shadowRoot!.querySelector('button')
      if (nativeButton) {
        expect(nativeButton.type).to.equal('button');
      }

    });
  })

  describe('when passing attributes', () => {

    const variants: OdsButtonVariant[] = ['primary', 'success', 'warning', 'danger', 'neutral']
    variants.forEach(variant => {
      it(`should be accessible with the "${variant}" variant`, async () => {
        const el = await render({ variant })
        await expect(el).to.be.accessible()
      })
    })

    const sizes: OdsButtonSize[] = ['small', 'medium', 'normal']
    sizes.forEach(size => {
      it(`should be accessible with the "${size}" size`, async () => {
        const el = await render({ size: size })
        await expect(el).to.be.accessible()
      })
    })

    const types: OdsButtonType[] = ['button', 'submit', 'reset']
    types.forEach(type => {
      it(`should be accessible with the "${type}" type`, async () => {
        const el = await render({ type })
        await expect(el).to.be.accessible()
        await expect(el.shadowRoot!.querySelector(`button[type='${type}']`)).to.exist
      })
    })

    it(`should be accessible with the fully attribute`, async () => {
      const el = await render({ fully: true })
      await expect(el).to.be.accessible()
    })

    it(`should be accessible with the outlined attribute`, async () => {
      const el = await render({ outlined: true })
      await expect(el).to.be.accessible()
    })
  })

  describe('when disabled', () => {
    it('should be accessible with the disabled attribute', async () => {
      const el = await render({ disabled: true })
      await expect(el).to.be.accessible()
    })

    it('should disable the native <button>', async () => {
      const el = await render({ disabled: true })
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
