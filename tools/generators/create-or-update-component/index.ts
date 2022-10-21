import { Tree, generateFiles, joinPathFragments, names, formatFiles, getWorkspaceLayout } from '@nrwl/devkit'
import { ComponentSchema, NxDevKitNames } from '../types/web-component'

interface NormalizedOptions extends ComponentSchema, NxDevKitNames {
  hasCategory: boolean
  npmScope: string
  sourcePath: string
}

function normalizeOptions(tree: Tree, options: ComponentSchema): NormalizedOptions {
  const { libsDir, npmScope } = getWorkspaceLayout(tree)
  const hasCategory = options.category !== 'none'
  const attributes = options.attributes?.map(attr => {
    const attribute = (attr as string).split('/')
    return {
      name: names(attribute[0]),
      type: names(attribute[1])
    }
  })
  const sourcePath = `./${libsDir}/components/src`
  return {
    ...options,
    ...names(options.name),
    hasCategory,
    sourcePath,
    npmScope,
    attributes
  }
}

function addFiles(tree: Tree, options: NormalizedOptions) {
  const templateOptions = {
    ...options,
    template: '',
    creationDate: new Date().toISOString()
  }
  console.log(templateOptions)
  const path = `${options.sourcePath}/${options.hasCategory ? options.category : ''}`
  generateFiles(tree, joinPathFragments(__dirname, './files'), path, templateOptions)
}

function updateIndexFile(host: Tree, filePath: string, toInsert: string) {
  const contents = host.read(filePath)?.toString().trim()
  const newContents = `
    ${contents || ''}
    ${contents?.includes(toInsert) ? '' : toInsert}
  `
  host.write(filePath, newContents)
  return host
}

function updateRootIndexFile(host: Tree, path: string, sourcePath: string) {
  const filePath = `${sourcePath}/index.ts`
  const toInsert = `export * from './${path}'`
  return updateIndexFile(host, filePath, toInsert)
}

function updateCategoryIndexFile(host: Tree, componentPath: string, sourcePath: string, category: string) {
  const filePath = `${sourcePath}/${category}/index.ts`
  const toInsert = `export * from './${componentPath}'`
  return updateIndexFile(host, filePath, toInsert)
}

function handleIndexFile(host: Tree, options: NormalizedOptions) {
  const component = `${names(options.name).fileName}`
  const sourcePath = options.sourcePath;
  const category = options.category;

  if (options.hasCategory) {
    host = updateCategoryIndexFile(host, component, sourcePath, category)
    host = updateRootIndexFile(host, options.category, sourcePath)
  } else {
    host = updateRootIndexFile(host, component, sourcePath)
  }
  return host
}

export async function componentGenerator(tree: Tree, options: ComponentSchema) {
  const normalizedOptions = normalizeOptions(tree, options)
  addFiles(tree, normalizedOptions)
  handleIndexFile(tree, normalizedOptions)
  await formatFiles(tree)
}

export default componentGenerator
