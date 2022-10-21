//
// This script runs the typescript compiler
//
import { execSync } from 'child_process'
import { feedbackErrorMessage, feedbackMessage } from '../utils/feedback-message.mjs'
import chalk from 'chalk'
const [, , outdir, tmpPath] = process.argv;

try {
  console.log(chalk.bold.yellow(`
  🔥 Running the TypeScript compiler ...`));
  execSync(`tsc --project ${tmpPath + '/tsconfig.json'} --outdir "${outdir}"`, { stdio: 'inherit' });
  feedbackMessage('Files compiled successfully')
} catch (error) {
  feedbackErrorMessage('Error compiling typescript files', error)
}
