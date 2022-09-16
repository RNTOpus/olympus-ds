const path = require('path');
const fs = require('fs-extra');
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');

const entryFiles = () => {
  const components = fs
    .readdirSync(path.resolve(__dirname, './src/lib/components'))
    .filter((dir) => !dir.includes('.ts'))
    .reduce(
      (prev, acc) => ({
        ...prev,
        [acc]: [
          path.resolve(__dirname, `./src/lib/components/${[acc]}`),
        ],
      }),
      {}
    );
  return components;
};

module.exports = (config, context) => {
  console.log(config);
  return merge(config, {
    entry: {
      index: [path.resolve(__dirname, './src/index.ts')],
      ...entryFiles(),
    },
    mode: 'production',
    devtool: 'source-map',
    resolve: {
      extensions: ['.css'],
    },
    output: {
      filename: ({ chunk: { name } }) => {
        return name === 'index' ? '[name].js' : 'lib/[name].js';
      },
      clean: true,
      library: {
        name: '@olympus-ds/web-components',
        type: 'umd',
      },
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-typescript'],
          },
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
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
            from: path.resolve(__dirname, './', 'package.json'),
            to: path.resolve(__dirname, '../../dist/libs/web-components'),
          },
        ],
      }),
    ],
  });
};
