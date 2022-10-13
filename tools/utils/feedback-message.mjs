import chalk from 'chalk'

export function feedbackErrorMessage(message, error) {
  console.error(chalk.bold.red(`
  \u2717  ${message}`))
  console.error(chalk.red(error))
  process.exit(1)
}

export function feedbackMessage(message) {
  console.log(chalk.bold.blue(`
  \u2713  ${message}`))
}
