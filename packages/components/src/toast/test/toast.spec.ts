import '..'
import type { OdsToast } from '..'
import { expect, fixture, html } from '@open-wc/testing'

describe('<ods-toast>', () => {
  it('should render successfully', async () => {
    const el = await fixture<OdsToast>(html`<ods-toast />`)
    await expect(el).to.be.accessible()
  })
})
