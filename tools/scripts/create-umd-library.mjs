import { execSync } from 'child_process'
import { feedbackErrorMessage, feedbackMessage } from '../utils/feedback-message.mjs'
import { writeFileSync } from 'fs'
import prettier from 'prettier'
const [, , outdir, libraryName, tmpPath] = process.argv

function createRollupConfigFile() {
  const source = prettier.format(
    `
    import { nodeResolve } from '@rollup/plugin-node-resolve'
    import { terser } from "rollup-plugin-terser";

    export default {
      input: '${outdir}/index.js',
      output: [
        {
          file: '${outdir}/umd/index.js',
          format: 'umd',
          name: '${libraryName}',
          sourcemap: true
        },
        {
          file: '${outdir}/umd/index.min.js',
          format: 'umd',
          name: '${libraryName}',
          plugins: [terser()],
          sourcemap: true
        }
      ],
      plugins: [nodeResolve()]
    }
   `,
    { semi: false, parser: 'babel' }
  )
  writeFileSync(`${tmpPath}/rollup.config.mjs`, source, 'utf8')
}

try {
  createRollupConfigFile()
  execSync(`rollup --config ${tmpPath}/rollup.config.mjs`)
  feedbackMessage('Created UMD library successfully')
} catch (error) {
  feedbackErrorMessage('Error creating create UMD library', error)
}
