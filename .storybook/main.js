module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials'],
  core: {
    builder: 'webpack5'
  },
  framework: '@storybook/web-components',
  // uncomment the property below if you want to apply some webpack config globally
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need that should apply to all storybook configs
    config.module.rules.push({
      test: /\.ts$/,
      sideEffects: true,
      use: [
        {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.json'
          }
        }
      ]
    })

    // Return the altered config
    return config
  }
}
