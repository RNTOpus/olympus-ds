import '!style-loader!css-loader!../src/lib/styles/index.css'
export const parameters = {
  layout: 'centered',
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  }
};
