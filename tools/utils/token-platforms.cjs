const fs = require('fs-extra');

const PREFIX = 'ods'

const PLATFORM_CONFIG = [
  {
    name: 'css',
    formats: ['css/variables']
  },
  {
    name: 'scss',
    formats: ['scss/variables']
  },
  {
    name: 'js',
    formats: ['javascript/customEs6Format', 'typescript/customEs6DeclarationsFormat']
  }
]

function getTokens(source) {
  return fs.readdirSync(source).map(file => file.split('.')[0])
}

function getFileTemplate(platformName, platformFormat, filename, libPath) {
  const isType = platformFormat?.includes('typescript')
  return {
    format: platformFormat,
    destination: `${libPath ? libPath : ''}${filename ?? 'index'}.${isType ? 'd.ts' : platformName}`,
    options: {
      outputReferences: true
    }
  }
}

function getIndexFileTemplate(platformName, platformFormat) {
  const libPath = platformName === 'js' && 'lib/'
  return getFileTemplate(platformName, platformFormat, 'index', libPath)
}

function getTokenFileTemplate(platformName, platformFormat, token) {
  const libPath = platformName === 'js' ? 'lib/' : `${platformName}/`
  return getFileTemplate(platformName, platformFormat, token, libPath)
}

function getPlatformFiles(platform, source) {
  const platformName = platform['name']
  const platformFormats = platform['formats']
  return platformFormats?.flatMap(platformFormat => [
    { ...getIndexFileTemplate(platformName, platformFormat) },
    ...getTokens(source)?.map(token => ({
      ...getTokenFileTemplate(platformName, platformFormat, token),
      filter: {
        attributes: {
          category: token
        }
      }
    }))
  ])
}

function getTokenPlatforms(buildPath, source) {
  return PLATFORM_CONFIG?.reduce((prevPlatform, currentPlatform) => {
    const platformName = currentPlatform['name']
    return {
      ...prevPlatform,
      [platformName]: {
        ...(platformName !== 'js' ? { PREFIX } : {}),
        buildPath: `${buildPath}/`,
        transformGroup: platformName,
        files: getPlatformFiles(currentPlatform, source)
      }
    }
  }, {})
}

module.exports = { getTokenPlatforms }
