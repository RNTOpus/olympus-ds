import '..'
import type { OdsSelect } from '..'
import { expect, fixture, html } from '@open-wc/testing'

describe('<ods-select>', () => {
  it('should render successfully', async () => {
    const el = await fixture<OdsSelect>(html`<ods-select />`)
    await expect(el).to.be.accessible()
  })
})
