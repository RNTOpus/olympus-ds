const rootMain = require('../../../.storybook/main');
const path = require('path');
module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons, '@storybook/addon-a11y'],
  staticDirs: ['../public'],
  typescript: {
    check: false,
  },
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    config.resolve.extensions.push('.css');
    // config.resolve.alias = {
    //   ...config.resolve.alias,
    //   '~@olympus-ds/component-styles/index.css':
    //     '../node_modules/@olympus-ds/component-styles/index.css',
    // };

    // config.module.rules.push({
    //   test: /\.ts?$/,
    //   loader: 'babel-loader',
    //   exclude: /node_modules/,
    //   options: {
    //     presets: ['@babel/preset-typescript'],
    //   },
    // });

    config.module.rules.push({
      test: /\.html$/i,
      loader: 'html-loader',
    });

    const currentCssRuleIndex = config.module.rules.findIndex((rule) =>
      rule.test.toString().includes('css')
    );
    // Remove style-loader
    config.module.rules[currentCssRuleIndex] = {
      test: /\.css$/i,
      use: ['css-loader'],
      include: [path.resolve(__dirname, '../')],
    };

    return config;
  },
};
