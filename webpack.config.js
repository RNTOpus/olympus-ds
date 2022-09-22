const path = require('path');
const fs = require('fs-extra');
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');

module.exports = (config, context) => {
  console.log(config);
  console.log(context);
  return merge(config, {
    mode: "production",
    resolve: {
      extensions: ['.css'],
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['css-loader'],
        },
      ],
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: context.options.project,
            to: context.options.outputPath,
          },
        ],
      }),
    ],
  });
};
