import '..'
import type { OdsDivider } from '..'
import { expect, fixture, html } from '@open-wc/testing'

describe('<ods-divider>', () => {
  it('should render successfully', async () => {
    const el = await fixture<OdsDivider>(html`<ods-divider />`)
    await expect(el).to.be.accessible()
  })
})
