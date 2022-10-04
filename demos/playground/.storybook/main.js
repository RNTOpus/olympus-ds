const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const { mergeConfig } = require('vite');
const path = require('path');

module.exports = {
  core: { builder: 'webpack5' },
  stories: [
    '../src/*.stories.mdx',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  features: {
    babelModeV7: true,
  },
  staticDirs: ['../public'],
  // async viteFinal(config) {
  //   console.log(config);
  //   // Merge custom configuration into the default config
  //   return mergeConfig(config, {
  //     resolve: {
  //       alias: {
  //         '@olympus/button': path.resolve(__dirname, '../../../packages/button/dist/index.js')
  //       }
  //     },
  //   });
  // },
  webpackFinal: async (config) => {
    config.resolve.extensions.push('.css');
    config.resolve.plugins = [new TsconfigPathsPlugin({
      configFile: 'tsconfig.base.json'
    })]
    console.log(config.module.rules);
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
