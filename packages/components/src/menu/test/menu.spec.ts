import '..'
import type { OdsMenu } from '..'
import { expect, fixture, fixtureCleanup, html, oneEvent, waitUntil } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import sinon from 'sinon'

describe('<ods-menu>', () => {
  const menuIgnoreProps = {
    ignoreAttributes: ['appearance', 'id', 'dir', 'aria-orientation', 'orientation', 'selection-type'],
    ignoreChildren: ['ods-menu']
  }

  const menuItemIgnoreProps = {
    ignoreAttributes: ['dir', 'id', 'tabindex'],
    ignoreChildren: ['ods-menu-item']
  }

  afterEach(() => {
    fixtureCleanup()
  })

  describe('accessibility', () => {
    it('passes with menu role', async () => {
      const el = await fixture<OdsMenu>(html` <ods-menu>
        <ods-menu-item>Item</ods-menu-item>
      </ods-menu>`)
      await expect(el).to.be.accessible()
      expect(el.getAttribute('role')).to.equal('menu')
      expect(el).dom.to.equal('<ods-menu role="menu"></ods-menu>', menuIgnoreProps)
    })

    describe('using keyboard', () => {

      it('should apply focus to first element', async () => {
        const el = await fixture<OdsMenu>(html` <ods-menu>
          <ods-menu-item>Item A</ods-menu-item>
          <ods-menu-item>Item B</ods-menu-item>
          <ods-menu-item>Item C</ods-menu-item>
        </ods-menu>`)

        await el.updateComplete

        const keydownHandler = sinon.spy()
        const firstMenuItem = el.menuItems[0]
        const secondMenuItem = el.menuItems[1]

        el.addEventListener('keydown', keydownHandler)
        el.focus()

        expect(firstMenuItem.getAttribute('tabindex')).to.equal('0')
        expect(secondMenuItem.getAttribute('tabindex')).to.equal('-1')

        await sendKeys({ press: 'ArrowDown' })
        await waitUntil(() => keydownHandler.called)

        expect(keydownHandler).to.have.been.called

        expect(firstMenuItem.getAttribute('tabindex')).to.equal('-1')
        expect(secondMenuItem.getAttribute('tabindex')).to.equal('0')

        await sendKeys({ press: 'Home' })
        await waitUntil(() => keydownHandler.called)

        expect(keydownHandler).to.have.been.called

        expect(firstMenuItem.getAttribute('tabindex')).to.equal('0')
        expect(secondMenuItem.getAttribute('tabindex')).to.equal('-1')
      })

      it('should apply focus to last element', async () => {
        const el = await fixture<OdsMenu>(html` <ods-menu>
          <ods-menu-item>Item A</ods-menu-item>
          <ods-menu-item>Item B</ods-menu-item>
          <ods-menu-item>Item C</ods-menu-item>
        </ods-menu>`)

        await el.updateComplete

        const keydownHandler = sinon.spy()
        const firstMenuItem = el.menuItems[0]
        const lastMenuItem = el.menuItems[2]

        el.addEventListener('keydown', keydownHandler)
        el.focus()

        expect(firstMenuItem.getAttribute('tabindex')).to.equal('0')
        expect(lastMenuItem.getAttribute('tabindex')).to.equal('-1')

        await sendKeys({ press: 'End' })
        await waitUntil(() => keydownHandler.called)

        expect(keydownHandler).to.have.been.called

        expect(firstMenuItem.getAttribute('tabindex')).to.equal('-1')
        expect(lastMenuItem.getAttribute('tabindex')).to.equal('0')
      })
      it('should apply focus to next element in vertical menu', async () => {
        const el = await fixture<OdsMenu>(html` <ods-menu>
          <ods-menu-item>Item A</ods-menu-item>
          <ods-menu-item>Item B</ods-menu-item>
          <ods-menu-item>Item C</ods-menu-item>
        </ods-menu>`)

        await el.updateComplete

        const keydownHandler = sinon.spy()
        const firstMenuItem = el.menuItems[0]
        const secondMenuItem = el.menuItems[1]

        el.addEventListener('keydown', keydownHandler)
        el.focus()

        expect(firstMenuItem.getAttribute('tabindex')).to.equal('0')
        expect(secondMenuItem.getAttribute('tabindex')).to.equal('-1')

        await sendKeys({ press: 'ArrowDown' })
        await waitUntil(() => keydownHandler.called)

        expect(keydownHandler).to.have.been.called

        expect(firstMenuItem.getAttribute('tabindex')).to.equal('-1')
        expect(secondMenuItem.getAttribute('tabindex')).to.equal('0')
      })

      it('should apply focus to previous element in vertical menu', async () => {
        const el = await fixture<OdsMenu>(html` <ods-menu>
          <ods-menu-item>Item A</ods-menu-item>
          <ods-menu-item>Item B</ods-menu-item>
          <ods-menu-item>Item C</ods-menu-item>
        </ods-menu>`)

        await el.updateComplete

        const keydownHandler = sinon.spy()
        const firstMenuItem = el.menuItems[0]
        const secondMenuItem = el.menuItems[1]

        el.addEventListener('keydown', keydownHandler)
        el.focus()

        expect(firstMenuItem.getAttribute('tabindex')).to.equal('0')
        expect(secondMenuItem.getAttribute('tabindex')).to.equal('-1')

        await sendKeys({ press: 'ArrowDown' })
        await waitUntil(() => keydownHandler.called)

        expect(keydownHandler).to.have.been.called

        expect(firstMenuItem.getAttribute('tabindex')).to.equal('-1')
        expect(secondMenuItem.getAttribute('tabindex')).to.equal('0')

        await sendKeys({ press: 'ArrowUp' })
        await waitUntil(() => keydownHandler.called)

        expect(firstMenuItem.getAttribute('tabindex')).to.equal('0')
        expect(secondMenuItem.getAttribute('tabindex')).to.equal('-1')
      })

      it('should apply focus to next element in horizontal menu', async () => {
        const el = await fixture<OdsMenu>(html` <ods-menu orientation="horizontal">
          <ods-menu-item>Item A</ods-menu-item>
          <ods-menu-item>Item B</ods-menu-item>
          <ods-menu-item>Item C</ods-menu-item>
        </ods-menu>`)

        await el.updateComplete

        const keydownHandler = sinon.spy()
        const firstMenuItem = el.menuItems[0]
        const secondMenuItem = el.menuItems[1]

        el.addEventListener('keydown', keydownHandler)
        el.focus()

        expect(firstMenuItem.getAttribute('tabindex')).to.equal('0')
        expect(secondMenuItem.getAttribute('tabindex')).to.equal('-1')

        await sendKeys({ press: 'ArrowRight' })
        await waitUntil(() => keydownHandler.called)

        expect(keydownHandler).to.have.been.called

        expect(firstMenuItem.getAttribute('tabindex')).to.equal('-1')
        expect(secondMenuItem.getAttribute('tabindex')).to.equal('0')
      })

      it('should apply focus to previous element in horizontal menu', async () => {
        const el = await fixture<OdsMenu>(html` <ods-menu orientation="horizontal">
          <ods-menu-item>Item A</ods-menu-item>
          <ods-menu-item>Item B</ods-menu-item>
          <ods-menu-item>Item C</ods-menu-item>
        </ods-menu>`)

        await el.updateComplete

        const keydownHandler = sinon.spy()
        const firstMenuItem = el.menuItems[0]
        const secondMenuItem = el.menuItems[1]

        el.addEventListener('keydown', keydownHandler)
        el.focus()

        expect(firstMenuItem.getAttribute('tabindex')).to.equal('0')
        expect(secondMenuItem.getAttribute('tabindex')).to.equal('-1')

        await sendKeys({ press: 'ArrowRight' })
        await waitUntil(() => keydownHandler.called)

        expect(keydownHandler).to.have.been.called

        expect(firstMenuItem.getAttribute('tabindex')).to.equal('-1')
        expect(secondMenuItem.getAttribute('tabindex')).to.equal('0')

        await sendKeys({ press: 'ArrowLeft' })
        await waitUntil(() => keydownHandler.called)

        expect(firstMenuItem.getAttribute('tabindex')).to.equal('0')
        expect(secondMenuItem.getAttribute('tabindex')).to.equal('-1')
      })
    })
  })

  describe('navigation', () => {
    it('accessible with menuitem role', async () => {
      const el = await fixture<OdsMenu>(html` <ods-menu>
        <ods-menu-item>Item</ods-menu-item>
      </ods-menu>`)

      await expect(el.getAttribute('role')).to.equal('menu')

      const menuItem = el.menuItems[0]
      expect(menuItem.getAttribute('role')).to.equal('menuitem')

      expect(el).lightDom.to.equal('<ods-menu-item role="menuitem"></ods-menu-item>', menuItemIgnoreProps)
    })

    it('should activate clicked item and dispatch ods-change event', async () => {
      const el = await fixture<OdsMenu>(html` <ods-menu>
        <ods-menu-item>Item</ods-menu-item>
      </ods-menu>`)
      await el.updateComplete

      const menuItem = el.menuItems[0]
      const changeHandler = sinon.spy()

      el.addEventListener('ods-change', changeHandler)

      expect(menuItem.getAttribute('active')).to.be.null

      menuItem.click()

      await waitUntil(() => changeHandler.calledOnce)

      expect(menuItem.getAttribute('active')).to.be.exist
      expect(changeHandler).to.have.been.calledOnce
    })

    it('should remove item`s active attribute and dispatch ods-change event', async () => {
      const el = await fixture<OdsMenu>(html` <ods-menu>
        <ods-menu-item value="Item A">Item A</ods-menu-item>
      </ods-menu>`)
      await el.updateComplete

      const menuItem = el.menuItems[0]
      const changeHandler = sinon.spy()

      el.addEventListener('ods-change', changeHandler)

      menuItem.click()

      await waitUntil(() => changeHandler.calledOnce)

      expect(menuItem.getAttribute('active')).to.be.exist
      expect(changeHandler).to.have.been.calledOnce

      menuItem.click()

      expect(menuItem.getAttribute('active')).to.be.null

    })

    it('should not activate clicked item and not dispatch ods-change event if it`s disabled', async () => {
      const el = await fixture<OdsMenu>(html` <ods-menu>
        <ods-menu-item disabled>Item</ods-menu-item>
      </ods-menu>`)
      await el.updateComplete

      const menuItem = el.menuItems[0]
      const changeHandler = sinon.spy()

      el.addEventListener('ods-change', changeHandler)

      expect(menuItem.getAttribute('active')).to.be.null

      menuItem.click()

      await waitUntil(() => changeHandler.notCalled)

      expect(menuItem.getAttribute('active')).to.be.null
      expect(changeHandler).not.to.been.called
    })


    describe('using keyboard', () => {
      it('should activate the item and dispatch the ods-change event when Enter is pressed', async () => {
        const el = await fixture<OdsMenu>(html` <ods-menu orientation="horizontal">
          <ods-menu-item>Item A</ods-menu-item>
          <ods-menu-item>Item B</ods-menu-item>
        </ods-menu>`)

        await el.updateComplete

        const keydownHandler = sinon.spy()
        const changeHandler = sinon.spy()
        const firstMenuItem = el.menuItems[0]

        el.addEventListener('keydown', keydownHandler)
        el.addEventListener('ods-change', changeHandler)
        el.focus()

        await sendKeys({ press: 'Enter' })
        await waitUntil(() => keydownHandler.called)
        await waitUntil(() => changeHandler.calledOnce)

        expect(keydownHandler).to.have.been.called
        expect(changeHandler).to.have.been.calledOnce
        expect(firstMenuItem.getAttribute('active')).to.be.exist
      })

      it('should activate the item and dispatch the ods-change event when Space is pressed', async () => {
        const el = await fixture<OdsMenu>(html` <ods-menu orientation="horizontal">
          <ods-menu-item>Item A</ods-menu-item>
          <ods-menu-item>Item B</ods-menu-item>
        </ods-menu>`)

        await el.updateComplete

        const keydownHandler = sinon.spy()
        const changeHandler = sinon.spy()
        const firstMenuItem = el.menuItems[0]

        el.addEventListener('keydown', keydownHandler)
        el.addEventListener('ods-change', changeHandler)
        el.focus()

        await sendKeys({ press: 'Space' })
        await waitUntil(() => keydownHandler.called)
        await waitUntil(() => changeHandler.calledOnce)

        expect(keydownHandler).to.have.been.called
        expect(changeHandler).to.have.been.calledOnce
        expect(firstMenuItem.getAttribute('active')).to.be.exist
      })
    })
  })

  describe('single selection', () => {
    it('accessible with menuitemradio role', async () => {
      const el = await fixture<OdsMenu>(html` <ods-menu selection-type="single">
        <ods-menu-item>Item</ods-menu-item>
      </ods-menu>`)

      await expect(el.getAttribute('role')).to.equal('menu')

      const menuItem = el.menuItems[0]
      expect(menuItem.getAttribute('role')).to.equal('menuitemradio')

      expect(el).lightDom.to.equal('<ods-menu-item role="menuitemradio"></ods-menu-item>', menuItemIgnoreProps)
    })

    it('should select the clicked item and dispatch ods-change event', async () => {
      const el = await fixture<OdsMenu>(html` <ods-menu selection-type="single">
        <ods-menu-item>Item</ods-menu-item>
      </ods-menu>`)
      await el.updateComplete

      const menuItem = el.menuItems[0]
      const changeHandler = sinon.spy()

      el.addEventListener('ods-change', changeHandler)

      expect(menuItem.getAttribute('selected')).to.be.null

      menuItem.click()

      await waitUntil(() => changeHandler.calledOnce)

      expect(menuItem.getAttribute('selected')).to.be.exist
      expect(changeHandler).to.have.been.calledOnce
    })

    it('should not select the clicked item and not dispatch ods-change event if it`s disabled', async () => {
      const el = await fixture<OdsMenu>(html` <ods-menu selection-type="single">
        <ods-menu-item disabled>Item</ods-menu-item>
      </ods-menu>`)
      await el.updateComplete

      const menuItem = el.menuItems[0]
      const changeHandler = sinon.spy()

      el.addEventListener('ods-change', changeHandler)

      expect(menuItem.getAttribute('selected')).to.be.null

      menuItem.click()

      await waitUntil(() => changeHandler.notCalled)

      expect(menuItem.getAttribute('selected')).to.be.null
      expect(changeHandler).not.to.been.called
    })

    it('should dispatch ods-change event with detail', async () => {
      const el = await fixture<OdsMenu>(html` <ods-menu selection-type="single" label="myTest">
        <ods-menu-item value="A">Item A</ods-menu-item>
        <ods-menu-item value="B">Item B</ods-menu-item>
      </ods-menu>`)
      await el.updateComplete

      const firstMenuItem = el.menuItems[0]

      setTimeout(() => firstMenuItem.click())

      const { detail } = await oneEvent(el, 'ods-change')

      expect(detail).to.deep.equal({
        targetItem: firstMenuItem,
        selectedItems: [firstMenuItem],
        selected: ['A'],
        value: 'A',
        label: 'myTest'
      })
    })

    describe('using keyboard', () => {
      it('should select the item and dispatch the ods-change event when Enter is pressed', async () => {
        const el = await fixture<OdsMenu>(html` <ods-menu selection-type="single">
          <ods-menu-item>Item A</ods-menu-item>
          <ods-menu-item>Item B</ods-menu-item>
        </ods-menu>`)

        await el.updateComplete

        const keydownHandler = sinon.spy()
        const changeHandler = sinon.spy()
        const firstMenuItem = el.menuItems[0]

        el.addEventListener('keydown', keydownHandler)
        el.addEventListener('ods-change', changeHandler)
        el.focus()

        await sendKeys({ press: 'Enter' })
        await waitUntil(() => keydownHandler.called)
        await waitUntil(() => changeHandler.calledOnce)

        expect(keydownHandler).to.have.been.called
        expect(changeHandler).to.have.been.calledOnce
        expect(firstMenuItem.getAttribute('selected')).to.be.exist
      })

      it('should select the item and dispatch the ods-change event when Space is pressed', async () => {
        const el = await fixture<OdsMenu>(html` <ods-menu selection-type="single">
          <ods-menu-item>Item A</ods-menu-item>
          <ods-menu-item>Item B</ods-menu-item>
        </ods-menu>`)

        await el.updateComplete

        const keydownHandler = sinon.spy()
        const changeHandler = sinon.spy()
        const firstMenuItem = el.menuItems[0]

        el.addEventListener('keydown', keydownHandler)
        el.addEventListener('ods-change', changeHandler)
        el.focus()

        await sendKeys({ press: 'Space' })
        await waitUntil(() => keydownHandler.called)
        await waitUntil(() => changeHandler.calledOnce)

        expect(keydownHandler).to.have.been.called
        expect(changeHandler).to.have.been.calledOnce
        expect(firstMenuItem.getAttribute('selected')).to.be.exist
      })
    })

    describe('on the first load', () => {
      it('should select item by value attribute', async () => {
        const valueAttr = 'A'
        const el = await fixture<OdsMenu>(html` <ods-menu selection-type="single" label="myTest" .value=${valueAttr}>
          <ods-menu-item value="A">Item A</ods-menu-item>
          <ods-menu-item value="B">Item B</ods-menu-item>
        </ods-menu>`)
        await el.updateComplete

        const firstMenuItem = el.menuItems[0]
        const secondMenuItem = el.menuItems[1]

        expect(firstMenuItem.getAttribute('selected')).to.be.exist
        expect(secondMenuItem.getAttribute('selected')).to.be.null
      })

      it('should select item by selected attribute', async () => {
        const selectedAttr = ['A']
        const el = await fixture<OdsMenu>(html` <ods-menu
          selection-type="single"
          label="myTest"
          .selected=${selectedAttr}
        >
          <ods-menu-item value="A">Item A</ods-menu-item>
          <ods-menu-item value="B">Item B</ods-menu-item>
        </ods-menu>`)
        await el.updateComplete

        const firstMenuItem = el.menuItems[0]
        const secondMenuItem = el.menuItems[1]

        expect(firstMenuItem.getAttribute('selected')).to.be.exist
        expect(secondMenuItem.getAttribute('selected')).to.be.null
      })

      it('should consider the value attribute instead of selected', async () => {
        const valueAttr = 'A'
        const selectedAttr = ['B']
        const el = await fixture<OdsMenu>(html` <ods-menu
          selection-type="single"
          label="myTest"
          .value=${valueAttr}
          .selected=${selectedAttr}
        >
          <ods-menu-item value="A">Item A</ods-menu-item>
          <ods-menu-item value="B">Item B</ods-menu-item>
        </ods-menu>`)
        await el.updateComplete

        const firstMenuItem = el.menuItems[0]
        const secondMenuItem = el.menuItems[1]

        expect(firstMenuItem.getAttribute('selected')).to.be.exist
        expect(secondMenuItem.getAttribute('selected')).to.be.null
      })

      it('should set props if menu-item has selected', async () => {
        const el = await fixture<OdsMenu>(html` <ods-menu selection-type="single" label="myTest">
          <ods-menu-item value="A" selected>Item A</ods-menu-item>
          <ods-menu-item value="B">Item B</ods-menu-item>
        </ods-menu>`)
        await el.updateComplete

        const firstMenuItem = el.menuItems[0]

        expect(el.selected).to.deep.equal(['A'])
        expect(el.value).to.equal('A')
        expect(el.selectedItems).to.deep.equal([firstMenuItem])
      })

      it('should remove `selected` attribute of `ods-menu-item` if `value` attribute of `ods-menu` is filled', async () => {
        const valueAttr = 'A'
        const el = await fixture<OdsMenu>(html` <ods-menu selection-type="single" .value=${valueAttr} label="myTest">
          <ods-menu-item value="A">Item A</ods-menu-item>
          <ods-menu-item value="B" selected>Item B</ods-menu-item>
        </ods-menu>`)
        await el.updateComplete

        const firstMenuItem = el.menuItems[0]

        expect(el.selected).to.deep.equal(['A'])
        expect(el.value).to.equal('A')
        expect(el.selectedItems).to.deep.equal([firstMenuItem])
      })

      it('should remove `selected` attribute of `ods-menu-item` if `selected` attribute of `ods-menu` is filled', async () => {
        const selectedAttr = ['A']
        const el = await fixture<OdsMenu>(html` <ods-menu
          selection-type="single"
          .selected=${selectedAttr}
          label="myTest"
        >
          <ods-menu-item value="A">Item A</ods-menu-item>
          <ods-menu-item value="B" selected>Item B</ods-menu-item>
        </ods-menu>`)
        await el.updateComplete

        const firstMenuItem = el.menuItems[0]

        expect(el.selected).to.deep.equal(['A'])
        expect(el.value).to.equal('A')
        expect(el.selectedItems).to.deep.equal([firstMenuItem])
      })

      it('should define the last menu-item as selected, in case more than one item is selected', async () => {
        const el = await fixture<OdsMenu>(html` <ods-menu selection-type="single" label="myTest">
          <ods-menu-item value="A" selected>Item A</ods-menu-item>
          <ods-menu-item value="B" selected>Item B</ods-menu-item>
        </ods-menu>`)
        await el.updateComplete

        const lastMenuItem = el.menuItems[1]

        expect(el.selected).to.deep.equal(['B'])
        expect(el.value).to.equal('B')
        expect(el.selectedItems).to.deep.equal([lastMenuItem])
      })
    })
  })

  describe('multiple selection', () => {
    it('accessible with menuitemcheckbox role', async () => {
      const el = await fixture<OdsMenu>(html` <ods-menu selection-type="multiple">
        <ods-menu-item>Item</ods-menu-item>
      </ods-menu>`)

      await expect(el.getAttribute('role')).to.equal('menu')

      const menuItem = el.menuItems[0]
      await expect(menuItem.getAttribute('role')).to.equal('menuitemcheckbox')

      expect(el).lightDom.to.equal('<ods-menu-item role="menuitemcheckbox"></ods-menu-item>', menuItemIgnoreProps)
    })

    it('should check the clicked item and dispatch ods-change event', async () => {
      const el = await fixture<OdsMenu>(html` <ods-menu selection-type="multiple">
        <ods-menu-item>Item</ods-menu-item>
      </ods-menu>`)
      await el.updateComplete

      const menuItem = el.menuItems[0]
      const changeHandler = sinon.spy()

      el.addEventListener('ods-change', changeHandler)

      expect(menuItem.getAttribute('selected')).to.be.null

      menuItem.click()

      await waitUntil(() => changeHandler.calledOnce)

      expect(menuItem.getAttribute('selected')).to.be.exist
      expect(changeHandler).to.have.been.calledOnce
    })

    it('should uncheck the clicked item and dispatch ods-change event', async () => {
      const el = await fixture<OdsMenu>(html` <ods-menu selection-type="multiple">
        <ods-menu-item value="Item A">Item A</ods-menu-item>
      </ods-menu>`)
      await el.updateComplete

      const menuItem = el.menuItems[0]
      const changeHandler = sinon.spy()

      el.addEventListener('ods-change', changeHandler)

      menuItem.click()

      await waitUntil(() => changeHandler.calledOnce)

      expect(menuItem.getAttribute('selected')).to.be.exist
      expect(changeHandler).to.have.been.calledOnce

      menuItem.click()

      expect(menuItem.getAttribute('selected')).to.be.null

    })

    it('should not select the clicked item and not dispatch ods-change event if it`s disabled', async () => {
      const el = await fixture<OdsMenu>(html` <ods-menu selection-type="multiple">
        <ods-menu-item disabled>Item</ods-menu-item>
      </ods-menu>`)
      await el.updateComplete

      const menuItem = el.menuItems[0]
      const changeHandler = sinon.spy()

      el.addEventListener('ods-change', changeHandler)

      expect(menuItem.getAttribute('selected')).to.be.null

      menuItem.click()

      await waitUntil(() => changeHandler.notCalled)

      expect(menuItem.getAttribute('selected')).to.be.null
      expect(changeHandler).not.to.been.called
    })

    it('should dispatch ods-change event with detail', async () => {
      const el = await fixture<OdsMenu>(html` <ods-menu selection-type="multiple" label="myTest">
        <ods-menu-item value="A">Item A</ods-menu-item>
        <ods-menu-item value="B">Item B</ods-menu-item>
      </ods-menu>`)
      await el.updateComplete

      const firstMenuItem = el.menuItems[0]

      setTimeout(() => firstMenuItem.click())

      const { detail } = await oneEvent(el, 'ods-change')

      expect(detail).to.deep.equal({
        targetItem: firstMenuItem,
        selectedItems: [firstMenuItem],
        selected: ['A'],
        value: 'A',
        label: 'myTest'
      })
    })

    describe('using keyboard', () => {
      it('should select the item and dispatch the ods-change event when Enter is pressed', async () => {
        const el = await fixture<OdsMenu>(html` <ods-menu selection-type="multiple">
          <ods-menu-item>Item A</ods-menu-item>
          <ods-menu-item>Item B</ods-menu-item>
        </ods-menu>`)

        await el.updateComplete

        const keydownHandler = sinon.spy()
        const changeHandler = sinon.spy()
        const firstMenuItem = el.menuItems[0]

        el.addEventListener('keydown', keydownHandler)
        el.addEventListener('ods-change', changeHandler)
        el.focus()

        await sendKeys({ press: 'Enter' })
        await waitUntil(() => keydownHandler.called)
        await waitUntil(() => changeHandler.calledOnce)

        expect(keydownHandler).to.have.been.called
        expect(changeHandler).to.have.been.calledOnce
        expect(firstMenuItem.getAttribute('selected')).to.be.exist
      })

      it('should select the item and dispatch the ods-change event when Space is pressed', async () => {
        const el = await fixture<OdsMenu>(html` <ods-menu selection-type="multiple">
          <ods-menu-item>Item A</ods-menu-item>
          <ods-menu-item>Item B</ods-menu-item>
        </ods-menu>`)

        await el.updateComplete

        const keydownHandler = sinon.spy()
        const changeHandler = sinon.spy()
        const firstMenuItem = el.menuItems[0]

        el.addEventListener('keydown', keydownHandler)
        el.addEventListener('ods-change', changeHandler)
        el.focus()

        await sendKeys({ press: 'Space' })
        await waitUntil(() => keydownHandler.called)
        await waitUntil(() => changeHandler.calledOnce)

        expect(keydownHandler).to.have.been.called
        expect(changeHandler).to.have.been.calledOnce
        expect(firstMenuItem.getAttribute('selected')).to.be.exist
      })
    })

    describe('on the first load', () => {
      it('should select item(s) by value attribute', async () => {
        const valueAttr = 'A,B'
        const el = await fixture<OdsMenu>(html` <ods-menu selection-type="multiple" label="myTest" .value=${valueAttr}>
          <ods-menu-item value="A">Item A</ods-menu-item>
          <ods-menu-item value="B">Item B</ods-menu-item>
        </ods-menu>`)
        await el.updateComplete

        const firstMenuItem = el.menuItems[0]
        const secondMenuItem = el.menuItems[1]

        expect(firstMenuItem.getAttribute('selected')).to.be.exist
        expect(secondMenuItem.getAttribute('selected')).to.be.exist
      })

      it('should select item(s) by value attribute with new value-separator', async () => {
        const valueAttr = 'A|B'
        const el = await fixture<OdsMenu>(html` <ods-menu selection-type="multiple" label="myTest" value-separator="|" .value=${valueAttr}>
          <ods-menu-item value="A">Item A</ods-menu-item>
          <ods-menu-item value="B">Item B</ods-menu-item>
        </ods-menu>`)
        await el.updateComplete

        const firstMenuItem = el.menuItems[0]
        const secondMenuItem = el.menuItems[1]

        expect(firstMenuItem.getAttribute('selected')).to.be.exist
        expect(secondMenuItem.getAttribute('selected')).to.be.exist
        expect(el.value).to.equal('A|B')
      })

      it('should select item(s) by selected attribute', async () => {
        const selectedAttr = ['A', 'B']
        const el = await fixture<OdsMenu>(html` <ods-menu
          selection-type="multiple"
          label="myTest"
          .selected=${selectedAttr}
        >
          <ods-menu-item value="A">Item A</ods-menu-item>
          <ods-menu-item value="B">Item B</ods-menu-item>
        </ods-menu>`)
        await el.updateComplete

        const firstMenuItem = el.menuItems[0]
        const secondMenuItem = el.menuItems[1]

        expect(firstMenuItem.getAttribute('selected')).to.be.exist
        expect(secondMenuItem.getAttribute('selected')).to.be.exist
      })

      it('should consider the value attribute instead of selected', async () => {
        const valueAttr = 'A,C'
        const selectedAttr = ['B']
        const el = await fixture<OdsMenu>(html` <ods-menu
          selection-type="multiple"
          label="myTest"
          .value=${valueAttr}
          .selected=${selectedAttr}
        >
          <ods-menu-item value="A">Item A</ods-menu-item>
          <ods-menu-item value="B">Item B</ods-menu-item>
          <ods-menu-item value="C">Item C</ods-menu-item>
        </ods-menu>`)
        await el.updateComplete

        const firstMenuItem = el.menuItems[0]
        const secondMenuItem = el.menuItems[1]
        const lastMenuItem = el.menuItems[2]

        expect(firstMenuItem.getAttribute('selected')).to.be.exist
        expect(secondMenuItem.getAttribute('selected')).to.be.null
        expect(lastMenuItem.getAttribute('selected')).to.be.exist
      })

      it('should set props if menu-item has selected', async () => {
        const el = await fixture<OdsMenu>(html` <ods-menu selection-type="multiple" label="myTest">
          <ods-menu-item value="A" selected>Item A</ods-menu-item>
          <ods-menu-item value="B" selected>Item B</ods-menu-item>
        </ods-menu>`)
        await el.updateComplete

        const firstMenuItem = el.menuItems[0]
        const secondMenuItem = el.menuItems[1]

        expect(el.selected).to.deep.equal(['A', 'B'])
        expect(el.value).to.equal('A,B')
        expect(el.selectedItems).to.deep.equal([firstMenuItem, secondMenuItem])
      })


      it('should remove `selected` attribute of `ods-menu-item` if `value` attribute of `ods-menu` is filled', async () => {
        const valueAttr = 'A,C'
        const el = await fixture<OdsMenu>(html` <ods-menu selection-type="multiple" .value=${valueAttr} label="myTest">
          <ods-menu-item value="A">Item A</ods-menu-item>
          <ods-menu-item value="B" selected>Item B</ods-menu-item>
          <ods-menu-item value="C">Item C</ods-menu-item>
        </ods-menu>`)
        await el.updateComplete

        const firstMenuItem = el.menuItems[0]
        const lastMenuItem = el.menuItems[2]

        expect(el.selected).to.deep.equal(['A', 'C'])
        expect(el.value).to.equal('A,C')
        expect(el.selectedItems).to.deep.equal([firstMenuItem, lastMenuItem])
      })

      it('should remove `selected` attribute of `ods-menu-item` if `selected` attribute of `ods-menu` is filled', async () => {
        const selectedAttr = ['A', 'C']
        const el = await fixture<OdsMenu>(html` <ods-menu
          selection-type="multiple"
          .selected=${selectedAttr}
          label="myTest"
        >
          <ods-menu-item value="A">Item A</ods-menu-item>
          <ods-menu-item value="B" selected>Item B</ods-menu-item>
          <ods-menu-item value="C">Item C</ods-menu-item>
        </ods-menu>`)
        await el.updateComplete

        const firstMenuItem = el.menuItems[0]
        const lastMenuItem = el.menuItems[2]

        expect(el.selected).to.deep.equal(['A', 'C'])
        expect(el.value).to.equal('A,C')
        expect(el.selectedItems).to.deep.equal([firstMenuItem, lastMenuItem])
      })
    })
  })
})
