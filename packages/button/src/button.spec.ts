import '../button';

describe('Button', () => {

  const ODS_BUTTON_TAG = 'ods-button';

  const setup = (attributes?: string, slot?: string) => {
    document.body.querySelector(ODS_BUTTON_TAG)?.remove()
    document.body.innerHTML = `<${ODS_BUTTON_TAG} ${attributes}>${slot}</${ODS_BUTTON_TAG}>`;
    const host = document.querySelector(ODS_BUTTON_TAG);
    const shadowRoot = host?.shadowRoot;
    const buttonElement = shadowRoot?.querySelector(
      'button'
    ) as HTMLButtonElement;
    return { shadowRoot, buttonElement };
  };

  it('should render `ods-button` successfully', () => {
    const { shadowRoot, buttonElement } = setup();
    expect(shadowRoot).toBeTruthy();
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.getAttribute('type')).toBe('button');
  });

  it('should render `ods-button` with a label', () => {
    const { shadowRoot, buttonElement } = setup('label="Button label"');
    const labelElement = buttonElement.querySelector('.ods-button-label');
    expect(shadowRoot?.host.hasAttribute('label')).toBeTruthy();
    expect(labelElement?.textContent).toBe('Button label');
  });

  it('should render `ods-button` disabled', () => {
    const { shadowRoot, buttonElement } = setup('disabled');
    expect(shadowRoot?.host.hasAttribute('disabled')).toBeTruthy();
    expect(buttonElement.hasAttribute('disabled')).toBeTruthy();
  });

  it('should render `ods-button` with submit type', () => {
    const { shadowRoot, buttonElement } = setup('type="submit"');
    expect(shadowRoot?.host.getAttribute('type')).toBe('submit');
    expect(buttonElement.getAttribute('type')).toBe('submit');
  });

});
