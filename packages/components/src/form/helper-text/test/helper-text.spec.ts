import '..'
import type { OdsHelperText } from '..'
import { expect, fixture, html } from '@open-wc/testing'

describe('<ods-helper-text>', () => {
  it('should render successfully', async () => {
    const el = await fixture<OdsHelperText>(html`<ods-helper-text />`)
    await expect(el).to.be.accessible()
  })
})
