export const argTypes = (showControl = true) => ({
  label: {
    description:
      'Essa propriedade só existe no storybook<br />**O componente tem um `<slot></slot>` para adicionar conteúdo dentro dele.**',
  },
  type: {
    description: 'Altera o tipo do componente nativo',
    options: ['button', 'submit', 'reset'],
    table: {
      type: {
        summary: 'button|submit|reset',
      },
      defaultValue: {
        summary: 'button',
      },
    },
    control: showControl ? { type: 'inline-radio' } : false,
  },
  state: {
    description: 'Define o estado do botão',
    table: {
      type: {
        summary: 'primary|danger|warning|success',
      },
      defaultValue: {
        summary: 'primary',
      },
    },
    options: ['primary', 'danger', 'warning', 'success'],
    control: showControl ? { type: 'inline-radio' } : false,
  },
  size: {
    description: 'Define a altura do botão',
    table: {
      type: {
        summary: 'small|medium|normal',
      },
      defaultValue: {
        summary: 'normal',
      },
    },
    options: ['small', 'medium', 'normal'],
    control: showControl ? { type: 'inline-radio' } : false,
  },
  disabled: {
    description: 'Desabilita o botão',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: 'false',
      },
    }
  },
  outlined: {
    description: 'Muda o visual do botão para contornado',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: 'false',
      },
    }
  },
  fully: {
    description: 'Aplica 100% a largura do botão',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: 'false',
      },
    }
  },
});
