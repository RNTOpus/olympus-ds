//
// This script creates a web components wrapper for react components
//
import { names } from '@nrwl/devkit'
import { mkdirSync, writeFileSync } from 'fs'
import { getAllComponents } from '../utils/all-components.mjs'
import { feedbackErrorMessage, feedbackMessage } from '../utils/feedback-message.mjs'
import { deleteSync } from 'del'
import mkdirp from 'mkdirp'
import prettier from 'prettier'

const [, , outdir] = process.argv

try {
  const components = getAllComponents(outdir)
  const reactDir = `${outdir}/react`
  const index = [];

  deleteSync(reactDir);
  mkdirSync(reactDir, { recursive: true });

  components?.map(async component => {
    const { componentName, componentPath, tagNameWithoutPrefix, tagName, ...rest } = component
    const componentDir = `${reactDir}/${tagNameWithoutPrefix}`
    const reactComponentName = componentName.replace('Ods', '')
    const events = (rest.events || []).map(event => `on${names(event.name).className}: '${event.name}'`).join(',\n')
    const source = prettier.format(
      `
       import * as React from 'react';
       import { createComponent } from '@lit-labs/react';
       import { ${componentName} } from '../../${componentPath}';
       export default createComponent(
         React,
         '${tagName}',
         ${componentName},
         {
           ${events}
         }
       );
     `,
      { semi: false, parser: 'babel' }
    )
    index.push(`export * from './${tagNameWithoutPrefix}'`)
    await mkdirp(componentDir)
    writeFileSync(`${componentDir}/${reactComponentName}.ts`, source, 'utf8')
    writeFileSync(
      `${componentDir}/index.ts`,
      `export { default as ${componentName} } from './${reactComponentName}'`,
      'utf8'
    )
  })

  writeFileSync(`${reactDir}/index.ts`, index.join('\n'), 'utf-8')
  feedbackMessage('Components for React successfully created')
} catch (error) {
  feedbackErrorMessage('Error creating components for React', error)
}
