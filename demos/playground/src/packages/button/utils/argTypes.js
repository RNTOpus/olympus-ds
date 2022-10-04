export const argTypes = (showControl = true) => ({
  label: {
    description: 'Adiciona um texto dentro do botão',
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
  variant: {
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
  slot: {
    description:
      '**O componente tem um `<slot></slot>` para adicionar conteúdo extra dentro dele.**',
  },
  leftIcon: {
    description: 'Adiciona um ícone a esquerda. Nessa documentação é utilizado o <a href="https://fonts.google.com/icons?icon.set=Material+Symbols" target="_blank">Material Symbols</a>, mas você pode usar qualquer biblioteca de ícones.',
    options: ['none', 'home', 'person', 'lock'],
    control: showControl ? { type: 'inline-radio' } : false,
    table: {
      type: {
        summary: 'Exemplo',
        detail: '<span slot="left-icon">...</span>'
      },
    },
  },
  rightIcon: {
    description: 'Adiciona um ícone a direita. Nessa documentação é utilizado o <a href="https://fonts.google.com/icons?icon.set=Material+Symbols" target="_blank">Material Symbols</a>, mas você pode usar qualquer biblioteca de ícones.',
    options: ['none', 'search', 'edit', 'send'],
    control: showControl ? { type: 'inline-radio' } : false,
    table: {
      type: {
        summary: 'Exemplo',
        detail: '<span slot="right-icon">...</span>'
      },
    },
  },
});
