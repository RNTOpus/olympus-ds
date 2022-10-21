import '..'
import type { OdsLabel } from '..'
import { expect, fixture, html } from '@open-wc/testing'

describe('<ods-label>', () => {
  it('should render successfully', async () => {
    const el = await fixture<OdsLabel>(html`<ods-label />`)
    await expect(el).to.be.accessible()
  })
})
