import { readFileSync } from 'fs'
import path from 'path'

const getComponentPath = (pathWithoutSource, tagNameWithoutPrefix) => {
  return pathWithoutSource.substring(0, pathWithoutSource.indexOf(`/${tagNameWithoutPrefix}.component.ts`))
}

export function getAllComponents(dir) {
  const metadata = JSON.parse(readFileSync(path.join(dir, 'custom-elements.json'), 'utf8'))
  const components = []
  metadata?.modules.map(module => {
    module?.declarations.map(declaration => {
      if (declaration) {
        const tagNameWithoutPrefix = declaration?.tagName?.replace('ods-', '')
        components.push({
          ...declaration,
          componentPath: getComponentPath(module.path.replace('packages/components/src/', ''), tagNameWithoutPrefix),
          componentName: declaration?.name,
          tagNameWithoutPrefix
        })
      }
    })
  })
  return components
}
