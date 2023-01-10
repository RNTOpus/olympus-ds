import { ReactiveControllerHost } from 'lit';

export class SlotController {
  private host: ReactiveControllerHost & Element;

  constructor(host: ReactiveControllerHost & Element) {
    this.host = host;
    host.addController((this as any))
  }

  private hasDefaultSlot() {
    return [...this.host.childNodes].some(node => {
      if (node.nodeType === node.TEXT_NODE && node.textContent?.trim() !== '') {
        return true;
      }

      if (node.nodeType === node.ELEMENT_NODE) {
        const el = node as HTMLElement;
        if (!el.hasAttribute('slot')) {
          return true;
        }
      }

      return false;
    });
  }

  private hasSlot(name: string): boolean {
    return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
  }

  checkDefault() {
    return this.hasDefaultSlot()
  }

  check(slotName: string) {
    return this.hasSlot(slotName);
  }

}

export function getTextContent(slot?: HTMLSlotElement): string {
  if (!slot) {
    return '';
  }
  const nodes = slot.assignedNodes({ flatten: true });
  let text = '';

  [...nodes].forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      text += node.textContent;
    }
  });

  return text;
}
