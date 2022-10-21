const prefix = 'ods';
const platformConfig = require('./_config');
const tokens = require('./_tokens');

function getPlatforms(buildPath) {
  return platformConfig.reduce((prevPlatform, currentPlatform) => {
    const platformName = currentPlatform['name'];
    const platformFormats = currentPlatform['formats'];
    return {
      ...prevPlatform,
      [platformName]: {
        ...(platformName !== 'js' ? { prefix } : {}),
        buildPath: `${buildPath}/`,
        transformGroup: platformName,
        files: platformFormats?.flatMap((platformFormat) => {
          const isType = platformFormat?.includes('typescript');
          const template = (filename, directory) => ({
            format: platformFormat,
            destination: `${directory ? directory : ''}${filename ?? 'index'}.${
              isType ? 'd.ts' : platformName
            }`,
            options: {
              outputReferences: true,
            },
          });
          return [
            { ...template('index', platformName === 'js' && 'lib/') },
            ...tokens?.map((token) => ({
              ...template(
                token,
                platformName === 'js' ? 'lib/' : `${platformName}/`
              ),
              filter: {
                attributes: {
                  category: token,
                },
              },
            })),
          ];
        }),
      },
    };
  }, {});
}

module.exports = getPlatforms;
