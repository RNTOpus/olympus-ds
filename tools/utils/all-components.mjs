import { names } from '@nrwl/devkit'
import { readFileSync } from 'fs'
import path from 'path'

const getComponentPath = declaration => {
  return declaration?.superclass?.name !== 'OdsBaseElement'
    ? names(declaration?.superclass?.name.replace('Ods', '')).fileName
    : names(declaration?.name.replace('Ods', '')).fileName
}

export function getAllComponents(dir) {
  const metadata = JSON.parse(readFileSync(path.join(dir, 'custom-elements.json'), 'utf8'))
  const components = []
  metadata?.modules.map(module => {
    module?.declarations.map(declaration => {
      if (declaration) {
        components.push({
          ...declaration,
          componentPath: getComponentPath(declaration),
          componentName: declaration?.name,
          tagNameWithoutPrefix: declaration?.tagName?.replace('ods-', '')
        })
      }
    })
  })
  return components
}
