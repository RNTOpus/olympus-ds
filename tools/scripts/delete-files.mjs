import { feedbackErrorMessage, feedbackMessage } from '../utils/feedback-message.mjs'
import { deleteSync } from 'del'

const [, , outdir, target = 'file'] = process.argv;

try {
  deleteSync(outdir);
  feedbackMessage(`${target} deleted successfully`)
} catch (error) {
  feedbackErrorMessage(`Error deleting ${target}`, error)
}

