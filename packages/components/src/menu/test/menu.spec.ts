import '..'
import type { OdsMenu } from '..'
import { expect, fixture, html } from '@open-wc/testing'

describe('<ods-menu>', () => {
  it('should render successfully', async () => {
    const el = await fixture<OdsMenu>(html`<ods-menu />`)
    await expect(el).to.be.accessible()
  })
})
