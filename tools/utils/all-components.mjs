import { readFileSync } from 'fs'
import path from 'path'

export function getAllComponents(dir) {
  const metadata = JSON.parse(readFileSync(path.join(dir, 'custom-elements.json'), 'utf8'));
  const components = []
  metadata?.modules.map(module => {
    module?.declarations.map(declaration => {
      if (declaration) {
        components.push({
          ...declaration,
          componentPath: declaration?.tagName?.replace('ods-', ''),
          componentName: declaration?.name
        })
      }
    })
  })
  return components
}
