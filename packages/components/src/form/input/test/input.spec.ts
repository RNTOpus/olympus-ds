import '..'
import type { OdsInput } from '..'
import { expect, fixture, html } from '@open-wc/testing'

describe('<ods-input>', () => {
  it('should render successfully', async () => {
    const el = await fixture<OdsInput>(html`<ods-input />`)
    await expect(el).to.be.accessible()
  })
})
