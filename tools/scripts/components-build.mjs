import { mkdirSync } from 'fs'
import { execSync } from 'child_process'
import { deleteSync } from 'del'
import chalk from 'chalk'

const [, , outdir] = process.argv

const packageName = 'components'
const packagePath = `packages/${packageName}`
const sourceRoot = `${packagePath}/src`
const outputPath = outdir || `dist/${packagePath}`
const tmpPath = `tmp/${packagePath}`

deleteSync(outputPath);
mkdirSync(outputPath, { recursive: true });

(async () => {
  try {
    execSync(`node tools/scripts/create-metadata.mjs ${tmpPath} ${sourceRoot}`, { stdio: 'inherit' });
    execSync(`node tools/scripts/copy-files.mjs ${sourceRoot} ${tmpPath} "Components"`, { stdio: 'inherit' });
    execSync(`node tools/scripts/create-react-components.mjs ${tmpPath}`, { stdio: 'inherit' });
    execSync(`node tools/scripts/copy-files.mjs ${packagePath + '/tsconfig.json'} ${tmpPath + '/tsconfig.json'} "Typescript config file"`, { stdio: 'inherit' });
    execSync(`node tools/scripts/ts-compiler.mjs ${outputPath} ${tmpPath}`, { stdio: 'inherit' });
    execSync(`node tools/scripts/create-umd-library.mjs ${outputPath} "olympusComponents" ${tmpPath}`, { stdio: 'inherit' });
    execSync(`node tools/scripts/copy-files.mjs ${tmpPath + '/custom-elements.json'} ${outputPath + '/custom-elements.json'} "Custom elements file"`, { stdio: 'inherit' });
    execSync(`node tools/scripts/delete-files.mjs ${tmpPath} "Temporary folder"`, { stdio: 'inherit' });
    execSync(`node tools/scripts/copy-files.mjs ${packagePath + '/package.json'} ${outputPath + '/package.json'} "Package file"`, { stdio: 'inherit' });
    execSync(`node tools/scripts/add-exports-to-package.mjs ${outputPath}`, { stdio: 'inherit' });
    execSync(`node tools/scripts/copy-files.mjs ${packagePath + '/README.md'} ${outputPath + '/README.md'} "README file"`, { stdio: 'inherit' });
    console.log(chalk.bold.green(`
  📦 The build has been generated at ${outputPath}`));
  } catch (error) {
    console.error(chalk.red(error));
    execSync(`node tools/scripts/delete-files.mjs ${tmpPath} "Temporary folder"`, { stdio: 'inherit' });
    process.exit(1);
  }
})();
