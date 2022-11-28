import '..'
import type { OdsDropdown } from '..'
import { expect, fixture, html } from '@open-wc/testing'

describe('<ods-dropdown>', () => {
  it('should render successfully', async () => {
    const el = await fixture<OdsDropdown>(html`<ods-dropdown />`)
    await expect(el).to.be.accessible()
  })
})
