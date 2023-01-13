import '..'
import type { OdsToast } from '..'
import { aTimeout, expect, fixture, html, waitUntil } from '@open-wc/testing'
import sinon from 'sinon'

describe('<ods-toast>', () => {
  const render = async ({ variant, position, title, open, timeout }: any) => {
    return await fixture<OdsToast>(html`<ods-toast
      .variant=${variant}
      .position=${position}
      .title=${title}
      ?open=${open}
      timeout=${timeout}
    >
      Message
    </ods-toast>`)
  }

  it('should render successfully', async () => {
    const el = await fixture<OdsToast>(html`<ods-toast title="Title" open>Message</ods-toast>`)
    await expect(el).to.be.accessible()

    expect(el.variant).to.equal('primary')
    expect(el.position).to.equal('topRight')

    expect(el.open).to.true
  })
  it('should not render when closed', async () => {
    const el = await render({ open: false })
    expect(el.open).to.false
  })

  describe('when timeout', () => {
    it('should close toast', async () => {
      const el = await render({ open: true, timeout: 400 })
      expect(el.open).to.true

      await aTimeout(1000)

      expect(el.open).to.false
    })

    it('should not close if timeout is zero', async () => {
      const el = await render({ open: true, timeout: 0 })
      expect(el.open).to.true

      await aTimeout(1000)

      expect(el.open).to.true
    })
  })
})
