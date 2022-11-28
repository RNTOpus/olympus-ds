import '..'
import type { OdsMenuItem } from '..'
import { expect, fixture, html } from '@open-wc/testing'

describe('<ods-menu-item>', () => {
  it('should render successfully', async () => {
    const el = await fixture<OdsMenuItem>(html`<ods-menu-item />`)
    await expect(el).to.be.accessible()
  })
})
