import { feedbackErrorMessage, feedbackMessage } from '../utils/feedback-message.mjs'
import { getAllComponents } from '../utils/all-components.mjs'
import { writeFileSync, readFileSync } from 'fs'

const [, , source] = process.argv

const dual = list =>
  list.reduce(
    (acc, { componentPath, tagNameWithoutPrefix }) => ({
      ...acc,
      [`./${tagNameWithoutPrefix}`]: `./${componentPath}/index.js`,
      [`./react/${tagNameWithoutPrefix}`]: `./react/${tagNameWithoutPrefix}/index.js`
    }),
    {}
  )

const generatePackageExports = list => ({
  '.': './index.js',
  './react': './react/index.js',
  ...dual(list)
})

try {
  const components = getAllComponents(source)
  const packageJsonPath = `${source}/package.json`
  const packageJson = JSON.parse(readFileSync(packageJsonPath).toString())
  packageJson.exports = generatePackageExports(components)
  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
  feedbackMessage('Exports successfully added to package file')
} catch (error) {
  feedbackErrorMessage('Error adding exports in package file', error)
}
