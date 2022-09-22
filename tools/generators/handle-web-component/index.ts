import {
  Tree,
  generateFiles,
  joinPathFragments,
  names,
  formatFiles,
  getWorkspaceLayout,
  updateJson,
} from '@nrwl/devkit';
import { WebComponentSchema, NxDevKitNames } from '../types/web-component';

interface NormalizedOptions extends WebComponentSchema, NxDevKitNames {
  libsDir: string;
  npmScope: string;
}

function normalizeOptions(
  tree: Tree,
  options: WebComponentSchema
): NormalizedOptions {
  const { libsDir, npmScope } = getWorkspaceLayout(tree);
  const attributes = options.attributes?.map(attr => {
    const attribute = attr.split('/')
    return {
      name: names(attribute[0]),
      type: names(attribute[1])
    }
  })
  return {
    ...names(options.name),
    libsDir,
    npmScope,
    attributes
  };
}

function addFiles(tree: Tree, options: NormalizedOptions) {
  const templateOptions = {
    ...options,
    template: '',
    creationDate: new Date().toISOString(),
  };
  console.log(templateOptions);
  generateFiles(
    tree,
    joinPathFragments(__dirname, './files/'),
    `./${options.libsDir}/`,
    templateOptions
  );
}

function updateRootTsConfig(host: Tree, options: NormalizedOptions) {
  updateJson(host, './tsconfig.base.json', (json) => {
    const componentPathKey = `${options.npmScope}/${options.fileName}`;
    const componentPathValue = `${options.libsDir}/${options.fileName}/src/${options.fileName}.ts`
    const c = json.compilerOptions;
    c.paths = c.paths || {};
    delete c.paths[componentPathKey];
    c.paths[componentPathKey] = [componentPathValue];
    return json;
  });
}

function addProjectToWorkspaceJson(host: Tree, options: NormalizedOptions) {
  updateJson(host, './workspace.json', (json) => {
    const projectKey = `${options.fileName}`;
    const projectValue = `${options.libsDir}/${options.fileName}`
    delete json.projects[projectKey];
    json.projects[projectKey] = projectValue;
    return json;
  });
}

export async function webComponentGenerator(
  tree: Tree,
  options: WebComponentSchema
) {
  const normalizedOptions = normalizeOptions(tree, options);
  addFiles(tree, normalizedOptions);
  updateRootTsConfig(tree, normalizedOptions);
  addProjectToWorkspaceJson(tree, normalizedOptions);
  await formatFiles(tree);
}

export default webComponentGenerator;
