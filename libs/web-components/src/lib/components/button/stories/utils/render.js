import { html } from 'lit-html';

export const renderHTML = (color = 'Primary') => {
  const name = color.toLowerCase();
  return html`
    <section>
      <h2 class="title">${color}</h2>
      <div class="list">
        <div class="item">
          <ods-button color="${name}">Label</ods-button>
        </div>
        <div class="item">
          <ods-button color="${name}" disabled>Label</ods-button>
          <small>disabled</small>
        </div>
        <div class="item">
          <ods-button color="${name}" outlined>Label</ods-button>
          <small>outlined</small>
        </div>
        <div class="item">
          <ods-button color="${name}" outlined disabled>Label</ods-button>
          <small>outlined | disabled</small>
        </div>
      </div>
      <div class="list">
        <div class="item">
          <ods-button color="${name}" size="medium">Label</ods-button>
          <small>medium</small>
        </div>
        <div class="item">
          <ods-button color="${name}" size="medium" disabled>Label</ods-button>
          <small>medium | disabled</small>
        </div>
        <div class="item">
          <ods-button color="${name}" size="medium" outlined>Label</ods-button>
          <small>medium | outlined</small>
        </div>
        <div class="item">
          <ods-button color="${name}" size="medium" outlined disabled
            >Label</ods-button
          >
          <small>medium | outlined | disabled</small>
        </div>
      </div>
      <div class="list">
        <div class="item">
          <ods-button color="${name}" size="small">Label</ods-button>
          <small>small</small>
        </div>
        <div class="item">
          <ods-button color="${name}" size="small" disabled>Label</ods-button>
          <small>small | disabled</small>
        </div>
        <div class="item">
          <ods-button color="${name}" size="small" outlined>Label</ods-button>
          <small>small | outlined</small>
        </div>
        <div class="item">
          <ods-button color="${name}" size="small" outlined disabled
            >Label</ods-button
          >
          <small>small | outlined | disabled</small>
        </div>
      </div>
    </section>
    <section>
      <h2 class="title">${color} | Fully</h2>
      <div class="list -grid">
        <div class="item">
          <ods-button color="${name}" fully>Label</ods-button>
        </div>
        <div class="item">
          <ods-button color="${name}" disabled fully>Label</ods-button>
          <small>disabled</small>
        </div>
        <div class="item">
          <ods-button color="${name}" outlined fully>Label</ods-button>
          <small>outlined</small>
        </div>
        <div class="item">
          <ods-button color="${name}" outlined disabled fully>Label</ods-button>
          <small>outlined | disabled</small>
        </div>
      </div>
      <div class="list -grid">
        <div class="item">
          <ods-button color="${name}" size="medium" fully>Label</ods-button>
          <small>medium</small>
        </div>
        <div class="item">
          <ods-button color="${name}" size="medium" disabled fully
            >Label</ods-button
          >
          <small>medium | disabled</small>
        </div>
        <div class="item">
          <ods-button color="${name}" size="medium" outlined fully
            >Label</ods-button
          >
          <small>medium | outlined</small>
        </div>
        <div class="item">
          <ods-button color="${name}" size="medium" outlined disabled fully
            >Label</ods-button
          >
          <small>medium | outlined | disabled</small>
        </div>
      </div>
      <div class="list -grid">
        <div class="item">
          <ods-button color="${name}" size="small" fully>Label</ods-button>
          <small>small</small>
        </div>
        <div class="item">
          <ods-button color="${name}" size="small" disabled fully
            >Label</ods-button
          >
          <small>small | disabled</small>
        </div>
        <div class="item">
          <ods-button color="${name}" size="small" outlined fully
            >Label</ods-button
          >
          <small>small | outlined</small>
        </div>
        <div class="item">
          <ods-button color="${name}" size="small" outlined disabled fully
            >Label</ods-button
          >
          <small>small | outlined | disabled</small>
        </div>
      </div>
    </section>
  `;
};

export const renderSourceCode = (name = 'primary') => {
  return `
<ods-button color="${name}"></ods-button>
<ods-button color="${name}" size="medium"></ods-button>
<ods-button color="${name}" size="small"></ods-button>
<ods-button color="${name}" outlined></ods-button>
<ods-button color="${name}" disabled></ods-button>
<ods-button color="${name}" fully></ods-button>
  `;
};
