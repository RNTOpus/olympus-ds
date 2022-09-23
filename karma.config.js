module.exports = (config) => {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      { pattern: 'packages/**/src/*.ts' },
      { pattern: 'packages/**/src/test/*.ts' },
    ],
    preprocessors: {
      'packages/**/src/*.ts': ['karma-typescript', 'coverage'],
      'packages/**/src/test/*.ts': ['karma-typescript'],
    },
    karmaTypescriptConfig: {
      compilerOptions: {
        allowJs: true,
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        module: 'commonjs',
        sourceMap: true,
        target: 'ES6',
        types: ['node', 'jasmine'],
      },
      exclude: ['node_modules', 'tools', 'libs', 'demos'],
    },
    reporters: ['progress', 'coverage', 'karma-typescript'],
    browsers: ['ChromeHeadless'],
  });
  return config;
};
