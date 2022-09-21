import {
  Tree,
  generateFiles,
  joinPathFragments,
  names,
  formatFiles,
  getWorkspaceLayout,
  updateJson,
} from '@nrwl/devkit';
import { CreateWebComponentSchema, NxDevKitNames } from './schema';

interface NormalizedOptions extends CreateWebComponentSchema, NxDevKitNames {
  path: string;
  libsDir: string;
  npmScope: string;
}

function normalizeOptions(
  tree: Tree,
  options: CreateWebComponentSchema
): NormalizedOptions {
  const { libsDir, npmScope } = getWorkspaceLayout(tree);
  const path = `./${libsDir}/`;
  return {
    ...options,
    ...names(options.name),
    path,
    libsDir,
    npmScope,
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
    options.path,
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
  options: CreateWebComponentSchema
) {
  const normalizedOptions = normalizeOptions(tree, options);
  addFiles(tree, normalizedOptions);
  updateRootTsConfig(tree, normalizedOptions);
  addProjectToWorkspaceJson(tree, normalizedOptions);
  await formatFiles(tree);
}

export default webComponentGenerator;
