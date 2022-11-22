const chalk = require('chalk')
const { getTokenPlatforms } = require('../utils/token-platforms.cjs')
const { customEs6Format, customEs6DeclarationsFormat } = require('../utils/style-dictionary-formats.cjs')

const [, , outdir, source] = process.argv

const StyleDictionary = require('style-dictionary').extend({
  source: [`${source}/**/*.json`],
  platforms: { ...getTokenPlatforms(outdir, source) }
})
StyleDictionary.registerFormat(customEs6Format)
StyleDictionary.registerFormat(customEs6DeclarationsFormat)
StyleDictionary.buildAllPlatforms()
console.log(
  chalk.bold.blue(`
\u2713  Created tokens with style dictionary successfully`)
)
