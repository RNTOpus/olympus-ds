import '..'
import type { OdsTextField } from '..'
import { expect, fixture, html } from '@open-wc/testing'

describe('<ods-text-field>', () => {
  it('should render successfully', async () => {
    const el = await fixture<OdsTextField>(html`<ods-text-field />`)
    await expect(el).to.be.accessible()
  })
})
