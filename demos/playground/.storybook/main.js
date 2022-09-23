const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
module.exports = {
  core: { builder: 'webpack5' },
  stories: [
    '../src/*.stories.mdx',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.resolve.extensions.push('.css');
    config.resolve.plugins = [new TsconfigPathsPlugin({
      configFile: 'tsconfig.base.json'
    })]
    const currentCssRuleIndex = config.module.rules.findIndex((rule) =>
      rule.test.toString().includes('css')
    );
    // Remove style-loader
    config.module.rules[currentCssRuleIndex] = {
      test: /\.css$/i,
      use: ['css-loader']
    };
    return config;
  },
};
