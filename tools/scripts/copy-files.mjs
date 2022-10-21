import { feedbackErrorMessage, feedbackMessage } from '../utils/feedback-message.mjs'
import { copy } from 'fs-extra'

const [, , source, outdir, target = 'file'] = process.argv;

copy(source, outdir, function (error) {
  if (error) {
    feedbackErrorMessage(`Error copying ${target}`, error)
  }
  feedbackMessage(`${target} copied successfully`)
})
