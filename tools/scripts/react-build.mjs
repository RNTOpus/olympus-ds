/**
 * This is a script to generate the react wrapper for web components
 */

import { readCachedProjectGraph, names } from '@nrwl/devkit';
import path from 'path';
import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { deleteSync } from 'del';
import prettier from 'prettier';
import chalk from 'chalk';

function invariant(condition, message) {
  if (!condition) {
    console.error(chalk.bold.red(message));
    process.exit(1);
  }
}

const [, , name] = process.argv;

const graph = readCachedProjectGraph();
const project = graph.nodes[name];

invariant(
  project,
  `Could not find project "${name}" in the workspace. Is the project.json configured correctly?`
);

const outputPath = project.data?.targets?.['pre-build']?.options?.outputPath;

invariant(
  outputPath,
  `Could not find "build.options.outputPath" of project "${name}". Is project.json configured correctly?`
);

const entryFile = `${project.data?.sourceRoot}/src/${name}.component.ts`;

invariant(
  project.data?.sourceRoot,
  `Could not find "sourceRoot" of project "${name}". Is project.json configured correctly?`
);


// Clear react build directory
const reactDir = `${outputPath}/react`;
deleteSync(reactDir);
mkdirSync(reactDir, { recursive: true });

// Create metadata file
execSync(`cem analyze --globs "${entryFile}" --litelement --outdir "${outputPath}"`, { stdio: 'inherit' });

try {
  const metadata = JSON.parse(readFileSync(path.join(outputPath, 'custom-elements.json'), 'utf8'));
  const component = metadata.modules[0]?.declarations[0];
  const tagName = component.tagName;
  const reactName = component.name;
  const fileName = names(tagName.replace('ods-', '')).fileName;
  const events = (component.events || []).map(event => `on${names(event.name).className}: '${event.name}'`).join(',\n')
  const source = prettier.format(
    `
    import * as React from 'react';
    import { createComponent } from '@lit-labs/react';
    import{ ${reactName} } from '../index.js';
    export default createComponent(
      React,
      '${tagName}',
      ${reactName},
      {
        ${events}
      }
    );
  `, { semi: false, parser: "babel" }
  );
  const indexSource = `export { default as ${reactName} } from './${fileName}'`
  const indexTypeSource = `declare module '@olympus/${reactDir}';`
  writeFileSync(`${reactDir}/${fileName}.js`, source, 'utf8');
  writeFileSync(`${reactDir}/index.js`, indexSource, 'utf8');
  writeFileSync(`${reactDir}/index.d.ts`, indexTypeSource, 'utf8');
} catch (error) {
  deleteSync(outputPath);
  console.error(error);
  console.error(chalk.bold.red('Error creating react files'));
}


