import '..'
import type { OdsField } from '..'
import { expect, fixture, html } from '@open-wc/testing'

describe('<ods-field>', () => {
  it('should render successfully', async () => {
    const el = await fixture<OdsField>(html`<ods-field />`)
    await expect(el).to.be.accessible()
  })
})
