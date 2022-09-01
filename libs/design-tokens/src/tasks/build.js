const path = require('path');
const copyFiles = require('./copyFiles');
const getPlatforms = require('./platforms');
const { customEs6Format, customEs6DeclarationsFormat } = require('./customFormats/es6');
const rootPath = path.resolve(__dirname, '../../');
const buildPath = path.resolve(__dirname, `${rootPath}/dist`);
const tokensPath = path.resolve(__dirname, '../lib/tokens');
const StyleDictionary = require('style-dictionary').extend({
  source: [`${tokensPath}/**/*.json`],
  platforms: { ...getPlatforms(buildPath) },
});
StyleDictionary.registerFormat(customEs6Format);
StyleDictionary.registerFormat(customEs6DeclarationsFormat);
StyleDictionary.buildAllPlatforms();

copyFiles(rootPath, buildPath);
