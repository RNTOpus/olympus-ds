import buttonTemplate from './button.html';
import buttonStyles from './button.css';

export class Button extends HTMLElement {

  static get observedAttributes() {
    return [
      'type',
      'color',
      'size',
      'disabled',
      'fully',
      'outlined'
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.disabled && this.handleDisabledAttribute()
    this.getAttributesAndUpdate()
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return
    switch (name) {
      case 'disabled':
        this.handleDisabledAttribute();
        break;
      default:
        this.updateAttribute(name, newValue)
        break;
    }
  }

  render() {
    const { shadowRoot } = this;
    const styles = new CSSStyleSheet();
    styles.replaceSync(buttonStyles.toString());
    const { htmlContent } = this.htmlToElement(buttonTemplate);
    shadowRoot.innerHTML = '';
    shadowRoot.appendChild(htmlContent);
    shadowRoot.adoptedStyleSheets = [styles];
    this.button = shadowRoot.querySelector("button");
  }

  htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return { cssContent : template.content.firstChild, htmlContent: template.content.lastChild };
  }

  handleDisabledAttribute() {
    this.updateDisabledAttribute(this);
    this.shadowRoot.addEventListener('click', (event) => {
      event.preventDefault()
      event.stopImmediatePropagation();
    }, true);
  }

  getAttributesAndUpdate() {
    this.getAttributeNames()
      .filter(attr => !attr.match(new RegExp('^(on.*|data-*|disabled)')))
      .forEach((name) => this.updateAttribute(name, this.getAttribute(name)));
  }

  booleanAttributes = ['fully', 'outlined'];
  nativeAttributes = ['type']

  updateAttribute(name, value) {
    const isBoolean = this.booleanAttributes.some(attr => attr === name);
    const isNative = this.nativeAttributes.some(attr => attr === name);
    const newName = isNative ? name : `data-${name}`
    this.hasAttribute(name) ?
    this.button?.setAttribute(newName, `${isBoolean ? 'true' : value }`) :
    this.button?.removeAttribute(newName);
  }

  get disabled() {
    return this.hasAttribute('disabled')
  }

  updateDisabledAttribute() {
    this.button?.disabled = this.disabled;
  }
}

if(!customElements.get('ods-button')) {
  customElements.define('ods-button', Button);
}

export default Button
