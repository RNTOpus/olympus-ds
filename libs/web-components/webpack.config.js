const { merge } = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = (config, context) => {
  return merge(config, {
    mode: 'production',
    devtool: 'source-map',
    resolve: {
      extensions: ['.css'],
      alias: {
        '@olympus-ds/component-styles/css/button.css': path.resolve(__dirname, './node_modules/@olympus-ds/component-styles/css/button.css'),
      }
    },
    output: {
      filename: 'index.js',
      clean: true,
      library: {
        name: '@olympus-ds/web-components',
        type: 'esm'
      }
    },
    module: {
      rules: [
        {
          test: /\\.js$/,
          loader: "babel-loader",
          exclude: "/node_modules/",
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.css$/i,
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
              loader: "css-loader"
            },
          ],
        },
      ],
    }
  });
};
