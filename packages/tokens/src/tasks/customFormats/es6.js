const { camelCase } = require('change-case');
const { fileHeader, getTypeScriptType } = require('style-dictionary/lib/common/formatHelpers');
const customEs6Format = {
  name: 'javascript/customEs6Format',
  formatter: function ({ dictionary, file }) {
    return (
      fileHeader({ file }) +
      dictionary.allTokens
        .map(function (token) {
          var to_ret =
            'export const ' +
            camelCase(token.name) +
            ' = ' +
            JSON.stringify(token.value) +
            ';';
          if (token.comment) to_ret = to_ret.concat(' // ' + token.comment);
          return to_ret;
        })
        .join('\n')
    );
  },
};
const customEs6DeclarationsFormat = {
  name: 'typescript/customEs6DeclarationsFormat',
  formatter: function ({ dictionary, file }) {
    return (
      fileHeader({ file }) +
      dictionary.allProperties
        .map(function (prop) {
          var to_ret_prop =
            'export const ' +
            camelCase(prop.name) +
            ': ' +
            getTypeScriptType(prop.value) +
            ';';
          if (prop.comment)
            to_ret_prop = to_ret_prop.concat(' // ' + prop.comment);
          return to_ret_prop;
        })
        .join('\n')
    );
  },
};

module.exports = { customEs6Format, customEs6DeclarationsFormat };
