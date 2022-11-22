import chalk from 'chalk'
import { execSync } from 'child_process'

const [, , outdir] = process.argv

const packageName = 'tokens'
const packagePath = `packages/${packageName}`
const source = `${packagePath}/src/lib/tokens`
const outputPath = outdir || `dist/${packagePath}`

;(async () => {
  try {
    execSync(`node tools/scripts/style-dictionary-build.cjs ${outputPath} ${source}`, { stdio: 'inherit' })
    execSync(
      `node tools/scripts/copy-files.mjs ${packagePath + '/package.json'} ${
        outputPath + '/package.json'
      } "Package file"`,
      { stdio: 'inherit' }
    )
    execSync(
      `node tools/scripts/copy-files.mjs ${packagePath + '/README.md'} ${outputPath + '/README.md'} "README file"`,
      { stdio: 'inherit' }
    )
    console.log(chalk.bold.green(`
📦 The build has been generated at ${outputPath}
`))
  } catch (error) {
    console.error(chalk.red(error))
    execSync(`node tools/scripts/delete-files.mjs ${outputPath} "Output path folder"`, { stdio: 'inherit' })
    process.exit(1)
  }
})()
