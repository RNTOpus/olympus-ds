export const styleTags = [];
export const getStyleTags = () => styleTags.map((node) => node.cloneNode(true));

export default function (linkTag) {
  styleTags.push(linkTag);
}
