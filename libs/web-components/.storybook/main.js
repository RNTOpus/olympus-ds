const path = require('path');
const rootMain = require('../../../.storybook/main');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    config.resolve.extensions.push('.css');

    config.module.rules.push({
      test: /\.html$/i,
      loader: 'html-loader',
    });

    config.module.rules.push({
      test: /\.css$/i,
      sideEffects: false,
      use: [
        // {
        //   loader: "style-loader",
        //   options: {
        //     injectType: "lazyStyleTag",
        //     insert: function insertIntoTarget(element, options) {
        //       var parent = options.target || document.head;
        //       parent.appendChild(element);
        //     },
        //   },
        // },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
      ],
      include: path.resolve(__dirname, '../src/lib/components/**/*.css'),
    });

    console.log(config.module.rules[1]);

    // config.plugins.push(new MiniCssExtractPlugin());

    // add your own webpack tweaks if needed

    return config;
  },
};
