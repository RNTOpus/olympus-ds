const { camelCase } = require('change-case');
const { fileHeader, getTypeScriptType } = require('style-dictionary/lib/common/formatHelpers')

const customEs6Format = {
  name: 'javascript/customEs6Format',
  formatter: function ({ dictionary, file }) {
    return `${fileHeader({ file })}
    ${dictionary.allTokens
      .map(
        token =>
          `export const ${camelCase(token.name)} = ${JSON.stringify(token.value)}; ${
            token.comment ? `// ${token.comment}` : ''
          }`
      )
      .join('\n')}`
  }
}
const customEs6DeclarationsFormat = {
  name: 'typescript/customEs6DeclarationsFormat',
  formatter: function ({ dictionary, file }) {
    return `${fileHeader({ file })}
    ${dictionary.allProperties
      .map(
        prop =>
          `export const ${camelCase(prop.name)}: ${getTypeScriptType(prop.value)}; ${
            prop.comment ? `// ${prop.comment}` : ''
          }`
      )
      .join('\n')}`
  }
}

module.exports = { customEs6Format, customEs6DeclarationsFormat };
