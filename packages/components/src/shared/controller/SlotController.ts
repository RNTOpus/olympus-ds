import { ReactiveControllerHost } from 'lit';

export class SlotController {
  private host: ReactiveControllerHost & Element;

  constructor(host: ReactiveControllerHost & Element) {
    this.host = host;
    host.addController((this as any))
  }

  private hasSlot(name: string): boolean {
    return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
  }

  check(slotName: string) {
    return this.hasSlot(slotName);
  }
}
