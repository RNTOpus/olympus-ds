//
// This script runs the Custom Elements Manifest analyzer to generate custom-elements.json
//
import { execSync } from 'child_process'
import { feedbackErrorMessage, feedbackMessage } from '../utils/feedback-message.mjs'
const [, , outdir, globs] = process.argv;

try {
  execSync(`cem analyze --globs "${globs}" --litelement --outdir "${outdir}"`, { stdio: 'inherit' })
  feedbackMessage('Created custom element metadata successfully')
} catch (error) {
  feedbackErrorMessage('Error creating custom element metadata', error)
}
